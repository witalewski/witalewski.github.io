import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { GitRepo } from '../src/components/GitRepo';
import { decorator } from './decorator';

addDecorator(decorator);

storiesOf('GitRepo', module).add('with grid-magic', () => (
    <GitRepo
      repo={{
        id: 159163742,
        node_id: 'MDEwOlJlcG9zaXRvcnkxNTkxNjM3NDI=',
        name: 'grid-magic',
        full_name: 'witalewski/grid-magic',
        private: false,
        owner: {
          login: 'witalewski',
          id: 783419,
          node_id: 'MDQ6VXNlcjc4MzQxOQ==',
          avatar_url: 'https://avatars2.githubusercontent.com/u/783419?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/witalewski',
          html_url: 'https://github.com/witalewski',
          followers_url: 'https://api.github.com/users/witalewski/followers',
          following_url:
            'https://api.github.com/users/witalewski/following{/other_user}',
          gists_url: 'https://api.github.com/users/witalewski/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/witalewski/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/witalewski/subscriptions',
          organizations_url: 'https://api.github.com/users/witalewski/orgs',
          repos_url: 'https://api.github.com/users/witalewski/repos',
          events_url: 'https://api.github.com/users/witalewski/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/witalewski/received_events',
          type: 'User',
          site_admin: false,
        },
        html_url: 'https://github.com/witalewski/grid-magic',
        description:
          '🧙🏻‍ A tool for creating awesome grids for Instagram, work in progress.',
        fork: false,
        url: 'https://api.github.com/repos/witalewski/grid-magic',
        forks_url: 'https://api.github.com/repos/witalewski/grid-magic/forks',
        keys_url:
          'https://api.github.com/repos/witalewski/grid-magic/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/witalewski/grid-magic/collaborators{/collaborator}',
        teams_url: 'https://api.github.com/repos/witalewski/grid-magic/teams',
        hooks_url: 'https://api.github.com/repos/witalewski/grid-magic/hooks',
        issue_events_url:
          'https://api.github.com/repos/witalewski/grid-magic/issues/events{/number}',
        events_url: 'https://api.github.com/repos/witalewski/grid-magic/events',
        assignees_url:
          'https://api.github.com/repos/witalewski/grid-magic/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/witalewski/grid-magic/branches{/branch}',
        tags_url: 'https://api.github.com/repos/witalewski/grid-magic/tags',
        blobs_url:
          'https://api.github.com/repos/witalewski/grid-magic/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/witalewski/grid-magic/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/witalewski/grid-magic/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/witalewski/grid-magic/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/witalewski/grid-magic/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/witalewski/grid-magic/languages',
        stargazers_url:
          'https://api.github.com/repos/witalewski/grid-magic/stargazers',
        contributors_url:
          'https://api.github.com/repos/witalewski/grid-magic/contributors',
        subscribers_url:
          'https://api.github.com/repos/witalewski/grid-magic/subscribers',
        subscription_url:
          'https://api.github.com/repos/witalewski/grid-magic/subscription',
        commits_url:
          'https://api.github.com/repos/witalewski/grid-magic/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/witalewski/grid-magic/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/witalewski/grid-magic/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/witalewski/grid-magic/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/witalewski/grid-magic/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/witalewski/grid-magic/compare/{base}...{head}',
        merges_url: 'https://api.github.com/repos/witalewski/grid-magic/merges',
        archive_url:
          'https://api.github.com/repos/witalewski/grid-magic/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/witalewski/grid-magic/downloads',
        issues_url:
          'https://api.github.com/repos/witalewski/grid-magic/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/witalewski/grid-magic/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/witalewski/grid-magic/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/witalewski/grid-magic/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/witalewski/grid-magic/labels{/name}',
        releases_url:
          'https://api.github.com/repos/witalewski/grid-magic/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/witalewski/grid-magic/deployments',
        created_at: '2018-11-26T12:09:55Z',
        updated_at: '2018-12-06T13:03:50Z',
        pushed_at: '2018-12-06T13:04:15Z',
        git_url: 'git://github.com/witalewski/grid-magic.git',
        ssh_url: 'git@github.com:witalewski/grid-magic.git',
        clone_url: 'https://github.com/witalewski/grid-magic.git',
        svn_url: 'https://github.com/witalewski/grid-magic',
        homepage: 'https://witalewski.github.io/grid-magic/',
        size: 2061,
        stargazers_count: 0,
        watchers_count: 0,
        language: 'JavaScript',
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: true,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        open_issues_count: 0,
        license: {
          key: 'mit',
          name: 'MIT License',
          spdx_id: 'MIT',
          url: 'https://api.github.com/licenses/mit',
          node_id: 'MDc6TGljZW5zZTEz',
        },
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
        network_count: 0,
        subscribers_count: 1,
      }}
    />
  ));
  