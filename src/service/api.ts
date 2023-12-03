import React from 'react';
import axios from 'axios';

const url_user = 'https://api.github.com/users/';

type IApi = {
  id: number;
  name: string;
  login: string;
  location: string;
  avatar_url: string;
  public_repos: string;
  followers: string;
  following: string;
  repos_url: string;
};

export const api = () => {
  const [dataUser, setDataUser] = React.useState<IApi | null>(null);
  const [dataRepos, setDataRepos] = React.useState<any>(null);
  const [error, setError] = React.useState(false);

  async function getUser(user: string) {
    try {
      setError(false);
      const responseDataUser = await axios.get(`${url_user}${user}`);

      const json = responseDataUser.data;

      setDataUser(json);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  }

  const getRepos = React.useCallback(() => {
    async function getRepositories() {
      if (dataUser?.repos_url) {
        const responseRepos = await axios.get(dataUser?.repos_url);
        const json = responseRepos.data;

        setDataRepos(json);
      }
    }
    getRepositories();
  }, [dataUser]);

  return { dataUser, dataRepos, error, getRepos, getUser };
};

export default api;
