"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Github, Users, GitFork, Star, ExternalLink } from 'lucide-react'

interface GitHubStats {
    followers: number;
    public_repos: number;
    avatar_url: string;
    html_url: string;
    name: string;
    bio: string;
}

export default function GithubGrid() {
    const [githubData, setGithubData] = useState<GitHubStats | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchGithubStats() {
            try {
                const response = await fetch('https://api.github.com/users/amunjuluri')
                const data = await response.json()
                setGithubData(data)
            } catch (error) {
                console.error('Error fetching GitHub data:', error)
            } finally {
                setLoading(false)
            }
        }
        fetchGithubStats()
    }, [])

    return (
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-4 mt-8 border rounded-xl hover:border-gray-700 transition-all duration-300 max-w-full overflow-hidden">
            <div className="p-4 flex justify-center md:justify-start">
                <div className="relative w-48 md:w-64">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-slate-500 to-slate-800 rounded-full blur-xl opacity-30"></div>
                    <div className="relative">
                        <Image 
                            src="/github.png"
                            width={250}
                            height={500}
                            alt="GitHub Profile"
                            className="rounded-full w-full h-auto"
                        />
                    </div>
                </div>
            </div>
            
            <div className="p-4 md:p-6 flex flex-col justify-between">
                {loading ? (
                    <div className="animate-pulse space-y-4">
                        <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-700 rounded w-1/2"></div>
                    </div>
                ) : (
                    <>
                        <div className="space-y-4">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                                <h2 className="text-xl font-semibold">
                                    {githubData?.name || 'Anand Munjuluri'}
                                </h2>
                                <a 
                                    href={githubData?.html_url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200"
                                >
                                    Visit Profile 
                                    <ExternalLink size={16} />
                                </a>
                            </div>
                            
                            <p className="text-gray-400 text-sm md:text-base">{githubData?.bio}</p>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-2 text-gray-400">
                                    <Users size={20} />
                                    <span className="text-sm md:text-base">{githubData?.followers} followers</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-400">
                                    <Github size={20} />
                                    <span className="text-sm md:text-base">{githubData?.public_repos} repositories</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="mt-6">
                            <h3 className="text-sm text-gray-400 mb-2">Contributions</h3>
                            <div className="overflow-x-auto">
                                <img 
                                    src={`https://ghchart.rshah.org/amunjuluri`}
                                    alt="GitHub Contributions"
                                    className="w-full min-w-[640px] rounded-lg"
                                />
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}