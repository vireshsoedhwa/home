// src/components/Skills.js
import React from 'react';
import { BeakerIcon as BeakerSolid } from '@heroicons/react/24/solid';
import { BeakerIcon as BeakerOutline } from '@heroicons/react/24/outline';

import { StarIcon as StarSolid } from '@heroicons/react/24/solid';
import { StarIcon as StarOutline } from '@heroicons/react/24/outline';

import { CubeIcon as CubeSolid } from '@heroicons/react/24/solid';
import { CubeIcon as CubeOutline } from '@heroicons/react/24/outline';

import { RocketLaunchIcon as RocketSolid } from '@heroicons/react/24/solid';
import { RocketLaunchIcon as RocketOutline } from '@heroicons/react/24/outline';

const Skills = () => {
    const programming = [
        {
            language: 'Python',
            level: 5
        },
        {
            language: 'Javascript',
            level: 5
        },
        {
            language: 'Php',
            level: 5
        },
        {
            language: 'C++',
            level: 4
        },
        {
            language: 'C',
            level: 4
        },
        {
            language: 'C#',
            level: 4
        },
        {
            language: 'Java',
            level: 3
        },
    ];

    const frameworks = [
        {
            name: 'Django',
            level: 5
        },
        {
            name: 'DjangoREST',
            level: 5
        },
        {
            name: 'Laravel',
            level: 5
        },
        {
            name: 'Nodejs',
            level: 4
        },
        {
            name: 'React',
            level: 4
        },
        {
            name: 'MaterialUI',
            level: 4
        },
        {
            name: 'Vuejs',
            level: 3
        },
    ]


    const cicd = [
        {
            name: 'Kubernetes',
            level: 5
        },
        {
            name: 'Rancher',
            level: 5
        },
        {
            name: 'GitLabCI',
            level: 5
        },
        {
            name: 'FluxCD',
            level: 5
        },
        {
            name: 'WeaveGitOps',
            level: 3
        },
    ]

    const others = [
        {
            name: 'GitLab',
            level: 5
        },
        {
            name: 'Docker',
            level: 5
        },
        {
            name: 'Jira',
            level: 4
        }
    ]


    return (
        <section id="abilities" class=" pt-5">
            <div class="container grid md:grid-cols-6 gap-8 items-center">
                <div class="md:col-start-3 md:col-span-4">
                    <h2 class="inline-block bg-yellow-400 py-2 px-4 md:-ml-4 mb-2 text-xl font-motorstencil font-bold uppercase skew-x-12">
                        Skills & Abilities
                    </h2>
                </div>
                <div class="md:col-start-2 md:col-span-4">
                    <p class="ml-px text-xl text-gray-500">
                        A summary of my skills and abilities as a Software Engineer
                    </p>
                </div>
            </div>
            <div class="mx-6 mt-8 w-16 h-0.5 bg-gray-300 md:mx-auto md:relative md:-left-24"></div>


            <div class="py-8 px-6 md:px-16 grid md:grid-cols-2 gap-16">

                <div class="leading-loose">
                    <h3 class="font-bold text-xl mb-2">Programming</h3>

                    {programming.map((prog, index) => (
                        <dl key={index} class="group flex block justify-between">
                            <dt class="group-hover:font-semibold">{prog.language}</dt>
                            <dd class="shrink-0">
                                <ul class="flex flex-row">
                                    {Array.from({ length: 5 }, (_, index) => (
                                        <li key={index} class="inline-flex items-center">
                                            {(index < prog.level) ?
                                                <BeakerSolid className="h-6 w-6 text-blue-500 group-hover:text-yellow-400" />
                                                :
                                                <BeakerOutline className="h-6 w-6 text-blue-500" />
                                            }
                                        </li>
                                    ))}
                                </ul>
                            </dd>
                        </dl>
                    ))}

                    <h3 class="font-bold text-xl mb-2 mt-8">Frameworks</h3>

                    {frameworks.map((framework, index) => (
                        <dl key={index} class="group flex block justify-between">
                            <dt class="group-hover:font-semibold">{framework.name}</dt>
                            <dd class="shrink-0">
                                <ul class="flex flex-row">
                                    {Array.from({ length: 5 }, (_, index) => (
                                        <li key={index} class="inline-flex items-center">
                                            {(index < framework.level) ?
                                                <RocketSolid className="h-6 w-6 text-blue-500 group-hover:text-yellow-400" />
                                                :
                                                <RocketOutline className="h-6 w-6 text-blue-500" />
                                            }
                                        </li>
                                    ))}
                                </ul>
                            </dd>
                        </dl>
                    ))}

                </div>


                <div class="leading-loose">

                    <h3 class="font-bold text-xl mb-2">Infrastructure & CI/CD</h3>

                    {cicd.map((cicd, index) => (
                        <dl key={index} class="group flex block justify-between">
                            <dt class="group-hover:font-semibold">{cicd.name}</dt>
                            <dd class="shrink-0">
                                <ul class="flex flex-row">
                                    {Array.from({ length: 5 }, (_, index) => (
                                        <li key={index} class="inline-flex items-center">
                                            {(index < cicd.level) ?
                                                <CubeSolid className="h-6 w-6 text-blue-500 group-hover:text-yellow-400" />
                                                :
                                                <CubeOutline className="h-6 w-6 text-blue-500" />
                                            }
                                        </li>
                                    ))}
                                </ul>
                            </dd>
                        </dl>
                    ))}


                    <h3 class="font-bold text-xl mb-2 mt-8">Misc</h3>


                    {others.map((others, index) => (
                        <dl key={index} class="group flex block justify-between">
                            <dt class="group-hover:font-semibold">{others.name}</dt>
                            <dd class="shrink-0">
                                <ul class="flex flex-row">
                                    {Array.from({ length: 5 }, (_, index) => (
                                        <li key={index} class="inline-flex items-center">
                                            {(index < others.level) ?
                                                <StarSolid className="h-6 w-6 text-blue-500 group-hover:text-yellow-400" />
                                                :
                                                <StarOutline className="h-6 w-6 text-blue-500" />
                                            }
                                        </li>
                                    ))}
                                </ul>
                            </dd>
                        </dl>
                    ))}


                </div>

            </div>



        </section>
    );
};

export default Skills;
