// src/components/Experience.js
import React from 'react';

const About = () => {

    return (
        <section id="about-me" class="flex flex-col items-center justify-center min-h-screen py-16">
            <div class="container grid md:grid-cols-3 gap-8 items-center">
                <div class="avatar px-12 md:px-0">
                    <img class="rounded-full" alt="My avatar" src="https://avatars.githubusercontent.com/u/25619529?v=4"></img>
                </div>
                <div class="introduction md:col-span-2">
                    <h2 class="inline-block bg-yellow-400 py-2 px-4 md:-ml-4 mb-4 text-4xl font-motorstencil uppercase skew-x-12">About me</h2>
                    <p class="text-lg leading-loose">
                        Hi, my name is <strong>Viresh Soedhwa</strong>, I'm a software engineer based in Vancouver, BC, Canada.
                        Working with diverse teams and projects, I became proficient in a range of technologies and frameworks such as <strong>Django</strong>, <strong>Laravel</strong> and <strong>NodeJS/Express</strong>.
                        I have developed frontend applicatons using <strong>React</strong>, and <strong>CSS</strong> frameworks such as <strong>MaterialUI</strong> and <strong>TailwindJS</strong>. Infrastructure technologies such as <strong>Kubernetes</strong>, and <strong>CI/CD</strong> pipelines are part of my daily workflow.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
