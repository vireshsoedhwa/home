// src/components/Experience.js
import React from 'react';

const Experience = () => {
    const experiences = [
        {
            title: 'Course Production Senior Developer @ BCIT (fulltime)',
            company: 'British Columbia Institute of Technology',
            department: 'Learning and Teaching Center',
            division: 'Course Production',
            date: 'Current - Sept 2020',
            location: 'Burnaby',
            website: 'bcit.ca',
            description: "As the Developer at BCIT, I'm building web applications for the purpose of supporting and empowering students and instructors. Aditionally, I have also helped develop the most optimal development environment, to improve productivity of the developer while keeping the applications up to production standards.",
        },
        {
            title: 'Multimedia Developer @ BCIT (fulltime)',
            company: 'British Columbia Institute of Technology',
            department: 'Learning and Teaching Center',
            division: 'Virtual Simulation and Multimedia',
            date: 'Sept 2020 - Nov 2019',
            location: 'Burnaby',
            website: 'bcit.ca',
            description: "As the Multimedia Developer at BCIT, I was tasked with modernizing and future-proofing legacy multimedia applications by converting to a modern standard. I gained valuable experience while reverse-engineering applications with limited available documentation available.",
        },
    ];


    return (
        <section id="careers" class="min-h-screen pt-5">

            <div class="relative pb-5">

                <div class="absolute inset-0">
                    <div class="container grid md:grid-cols-3 gap-8 items-center h-full">
                        <div class="md:col-start-2 h-full pt-16 ml-2">
                            <div class="w-0.5 bg-gray-300 h-full">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container grid md:grid-cols-3 gap-8 items-center mb-4">
                    <div class="md:col-start-2 md:col-span-2">
                        <h2 class="inline-block bg-yellow-400 py-2 px-4 md:-ml-4 mb-4 text-lg font-bold uppercase skew-x-12">Career</h2>
                    </div>
                </div>

                {experiences.map((exp, index) => (
                    <div class="container grid md:grid-cols-3 gap-4 md:gap-8 mb-16">
                        <div class="pl-12 md:pl-0 md:text-right md:leading-loose uppercase text-gray-500">{exp.date}</div>
                        <div class="pl-12 md:col-span-2 relative">
                            <div class="rounded-full bg-white border-2 border-gray-300 w-5 h-5 absolute mt-1.5 -ml-12">
                            </div><h3 class="font-bold text-xl">{exp.title}</h3>
                            <p class="text-sm text-gray-500">
                                {exp.department}
                                &nbsp; | &nbsp;
                                {exp.division}
                            </p>
                            <p class="text-sm text-gray-500">
                                <span>
                                    {exp.location}
                                    &nbsp; | &nbsp;
                                    {exp.company}
                                    &nbsp; | &nbsp;
                                    <a class="text-blue-400" href={"https://" + exp.website} target="_blank">{exp.website}</a>
                                </span>
                            </p>
                            <p class="mt-6">
                                {exp.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>

    );
};

export default Experience;