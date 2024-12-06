// lib/github.ts
export async function getGitHubData(username: string) {
    const baseUrl = 'https://api.github.com';
    const response = await fetch(`${baseUrl}/users/${username}`);
    if (!response.ok) throw new Error('Failed to fetch GitHub data');
    return response.json();
  }