import { IUser } from './user';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import { IRepositories } from './repositories';

export type IRootStackParamList = {
  Home: undefined;
  User: { dataUser: IUser, dataRepos: IRepositories[] };
};

export type IRootStackParamNav = {
  Home: undefined;
  User: undefined
};

export type INavigationDataProps = NavigationProp<IRootStackParamList>;
export type IUserRouteProps = RouteProp<IRootStackParamList, 'User'>;

export type INavigationProps = NavigationProp<IRootStackParamNav>;
