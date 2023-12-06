// src/components/Experience.js
import React from 'react';

const Education = () => {

    const education = [
        {
            title: 'Bachelor of Science in Computing Science',
            school: 'Simon Fraser University',
            program: 'degree',
            date: 'May 2019 - Jan 2017',
            location: 'Burnaby, Canada',
            website: 'www.sfu.ca'
        },
        {
            title: 'Post-Degree diploma in Information & Communication Technology',
            school: 'Douglas College',
            program: 'diploma',
            date: 'Jan 2015 - Apr 2016',
            location: 'New Westminster, Canada',
            website: 'www.douglascollege.ca'
        },
        {
            title: 'Bachelor of Engineering in Electrical Engineering',
            school: 'University of the Netherlands Antilles',
            program: 'degree',
            date: 'Sept 2008 - Jun 2013',
            location: 'Curacao',
            website: 'www.uoc.cw'
        },
    ];

    return (
        <section id="education" class=" pt-5">
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
                        <h2 class="inline-block bg-yellow-400 py-2 px-4 md:-ml-4 mb-4 text-lg font-bold uppercase skew-x-12">Education</h2>
                    </div>
                </div>


                {education.map((exp, index) => (
                    <div class="container grid md:grid-cols-3 gap-4 md:gap-8 mb-16">
                        <div class="pl-12 md:pl-0 md:text-right md:leading-loose uppercase text-gray-500">{exp.date}</div>
                        <div class="pl-12 md:col-span-2 relative">
                            <div class="rounded-full bg-white border-2 border-gray-300 w-5 h-5 absolute mt-1.5 -ml-12">
                            </div><h3 class="font-bold text-xl">{exp.title}</h3>
                            <p class="text-sm text-gray-500">
                                {exp.location}
                                <span>
                                    &nbsp; | &nbsp;
                                    {exp.school}
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

export default Education;


