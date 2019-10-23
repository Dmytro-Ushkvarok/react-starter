import { make } from 'redux-chill';

const get = make('[auth] get')
  .stage('success')
  .stage('failure')
  .build((id: number) => id);

export { get };
