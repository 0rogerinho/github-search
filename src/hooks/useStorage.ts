import AsyncStorage from '@react-native-async-storage/async-storage';
import { IUser } from '../@types/user';

export const useStorage = () => {
  const getUser = async (key:string) => {
    try {
      const User = await AsyncStorage.getItem(key);

      return JSON.parse(User as string) || [];
    } catch (error) {
      console.log('error when searching', error);
      return [];
    }
  };

  const saveUser = async (key:string, value:IUser) => {
    try {
      const user: IUser[] = await getUser(key);
      
      if(!user.some((data)=> data.login === value.login)){
        user.unshift(value)
      }

      if(user.length >= 8){
        user.shift()
      }

      console.log(user.map(({login})=> login))
      

      const newUser =  user

      console.log(newUser);

      await AsyncStorage.setItem(key, JSON.stringify(newUser));
    } catch (error) {
      console.log('Error when save password', error);
    }
  };

  return { getUser, saveUser };
};

