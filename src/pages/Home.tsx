import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

// ASSETS
import vector from '../assets/vector.svg';

// SERVICES
import { getUser, getRepos } from '../services';

// STYLES
import {
  Avatar,
  ContentRepositories,
  Header,
  SectionLeft,
  SectionRight,
  Wrapperpages,
} from './styles';

export function Home() {
  const [urlParams] = useSearchParams();

  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(undefined);
  const [repos, setRepos] = useState<Array<{}>>([]);

  const loadUser = useCallback(async () => {
    try {
      setLoading(true);
      const { apiCall } = getUser();
      const { apiCall: apiCallRepos } = getRepos();

      const userParam = urlParams.get('user');
      if (!userParam) return;

      const dataUser = await apiCall(userParam);
      const dataRepos = await apiCallRepos(userParam);

      setUser(dataUser);

      const mostFavorited = (dataRepos as Array<{ stargazers_count: number }>).sort((a, b) =>
        a.stargazers_count > b.stargazers_count ? -1 : 1,
      );

      setRepos(mostFavorited.slice(0, 5));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      //
    }
  }, [urlParams]);

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  return (
    <Wrapperpages>
      {!loading && user && (
        <>
          <SectionLeft>
            <Avatar alt="user-avatar" src={user.avatar_url} />
          </SectionLeft>

          <SectionRight>
            <Header>
              <h1>{user.name}</h1>
              <h4>@{user.login}</h4>
              <p>{user.bio}</p>
            </Header>

            <h3>Top Repositories</h3>
            <hr />

            <ContentRepositories>
              {repos.map((repo) => (
                <div key={repo.id}>
                  <div className="description">
                    <h4>{repo.name}</h4>
                    <p>{repo.description}</p>
                  </div>

                  <div className="stars">
                    <img alt="star" src={vector} />
                    <p>{repo.stargazers_count}</p>
                  </div>
                </div>
              ))}
            </ContentRepositories>
          </SectionRight>
        </>
      )}
    </Wrapperpages>
  );
}
