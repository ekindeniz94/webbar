import { Expose } from 'class-transformer';

/**
 login: 'behrangalavi',
 id: 90796287,
 node_id: 'MDQ6VXNlcjkwNzk2Mjg3',
 avatar_url: 'https://avatars.githubusercontent.com/u/90796287?v=4',
 gravatar_id: '',
 url: 'https://api.github.com/users/behrangalavi',
 html_url: 'https://github.com/behrangalavi',
 followers_url: 'https://api.github.com/users/behrangalavi/followers',
 following_url: 'https://api.github.com/users/behrangalavi/following{/other_user}',
 gists_url: 'https://api.github.com/users/behrangalavi/gists{/gist_id}',
 starred_url: 'https://api.github.com/users/behrangalavi/starred{/owner}{/repo}',
 subscriptions_url: 'https://api.github.com/users/behrangalavi/subscriptions',
 organizations_url: 'https://api.github.com/users/behrangalavi/orgs',
 repos_url: 'https://api.github.com/users/behrangalavi/repos',
 events_url: 'https://api.github.com/users/behrangalavi/events{/privacy}',
 received_events_url: 'https://api.github.com/users/behrangalavi/received_events',
 type: 'User',
 site_admin: false
 */
export class GithubUserDto {
  @Expose()
  id: string;

  @Expose()
  email: string;

  @Expose()
  name: string;

  @Expose()
  login: string;

  @Expose()
  avatar_url: string;

  @Expose()
  type: string;

  @Expose()
  company: string;

  @Expose()
  blog: string;

  @Expose()
  location: string;

  @Expose()
  twitter_username: string;
}
