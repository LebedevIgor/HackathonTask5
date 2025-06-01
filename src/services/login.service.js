import { BehaviorSubject } from 'rxjs';
import { POST } from '../api/fetch-api';
// import UserServiceInstance from './user.service';
import AsyncStorage from '@react-native-async-storage/async-storage';

class LoginService {
  initialState = {
    loading: false,
    error: null,
    token: null,
  };

  state = this.initialState;
  state$ = new BehaviorSubject(this.state);

  async auth(data) {
    if (this.state.loading) {
      return;
    }

    this.state = {
      ...this.state,
      loading: true,
      error: null,
    };
    this.state$.next(this.state);

    try {
      const result = await POST('/auth/login', data);
      console.log(result);
      // if (result?.data?.user)
      //   UserServiceInstance.state$.next({
      //     ...UserServiceInstance.state$,
      //     user: result.data.user,
      //   });
      this.state = {
        ...this.state,
        loading: false,
        error: result.error,
        token: result?.token,
      };
      result?.token
        ? await AsyncStorage.setItem('auth_token', result?.token)
        : await AsyncStorage.removeItem('auth_token');

      this.state$.next(this.state);
    } catch (error) {
      console.log(error.message);

      this.state = {
        ...this.state,
        loading: false,
        error: error.message,
      };
      this.state$.next(this.state);
      throw new Error(error.message);
    }
  }

  //   async register() {
  //     if (this.state.loading) {
  //       return;
  //     }

  //     this.state = {
  //       ...this.state,
  //       loading: true,
  //     };
  //     this.state$.next(this.state);

  //     try {
  //       const result = await POST('/auth/register', this.state.loginInfo);
  //       if (result?.data?.user)
  //         UserServiceInstance.state$.next({
  //           ...UserServiceInstance.state$,
  //           user: result.data.user,
  //         });
  //       this.state = {
  //         ...this.state,
  //         loading: false,
  //         error: result.error,
  //         token: result?.data?.token,
  //         refreshToken: result?.data?.refreshToken,
  //       };
  //       if (result?.data?.token)
  //         await AsyncStorage.setItem('auth_token', result.data.token);
  //       if (result?.data?.refreshToken)
  //         await AsyncStorage.setItem('refresh_token', result.data.refreshToken);
  //       this.state$.next(this.state);
  //     } catch (error) {
  //       this.state = {
  //         ...this.state,
  //         loading: false,
  //         error: error.message,
  //       };
  //       this.state$.next(this.state);
  //       throw new Error(error.message);
  //     }
  //   }

  //   async logout() {
  //     try {
  //       await AsyncStorage.removeItem('auth_token');
  //       await AsyncStorage.removeItem('refresh_token');
  //       this.state = {
  //         token: null,
  //         refreshToken: null,
  //       };
  //       this.state$.next(this.state);
  //     } catch (error) {
  //       this.state = {
  //         token: null,
  //         refreshToken: null,
  //       };
  //       this.state$.next(this.state);
  //     }
  //   }

  //   async edit() {
  //     if (this.state.loading) {
  //       return;
  //     }

  //     this.state = {
  //       ...this.state,
  //       loading: true,
  //     };
  //     this.state$.next(this.state);

  //     try {
  //       const result = await POST('/user/settings', this.state.loginInfo);
  //       if (result?.data)
  //         UserServiceInstance.state$.next({
  //           ...UserServiceInstance.state$,
  //           user: result.data,
  //         });
  //       this.state = {
  //         ...this.state,
  //         loading: false,
  //         error: result.error,
  //       };
  //       this.state$.next(this.state);
  //     } catch (error) {
  //       this.state = {
  //         ...this.state,
  //         loading: false,
  //         error: error.message,
  //       };
  //       this.state$.next(this.state);
  //       throw new Error(error.message);
  //     }
  //   }
}

const LoginServiceInstance = new LoginService();
export default LoginServiceInstance;
