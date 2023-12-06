// src/components/Experience.js
import React from 'react';

const About = () => {

    return (
        <section id="about-me" class="flex flex-col items-center justify-center min-h-screen py-16">
            <div class="container grid md:grid-cols-3 gap-8 items-center">
                <div class="avatar px-12 md:px-0">
                    <img class="rounded-full" alt="My avatar" src="https://media.licdn.com/dms/image/D5603AQFjLxZ13qONxQ/profile-displayphoto-shrink_200_200/0/1701814344756?e=1707350400&v=beta&t=Y0euPvqtMjNcwWEbTksXUrWA0Zek-M85jBDQziJjdIA"></img>
                </div>
                <div class="introduction md:col-span-2">
                    <h2 class="inline-block bg-amber-400 py-2 px-4 md:-ml-4 mb-4 text-4xl font-motorstencil uppercase skew-x-12">About me</h2>
                    <p class="text-lg leading-loose">
                        Hi, my name is <strong>Viresh Soedhwa</strong>, I'm a software engineer based in Vancouver, BC, Canada.
                        Working with diverse teams and projects, I became proficient in a range of technologies and frameworks such as <strong>Django</strong>, <strong>Laravel</strong> and <strong>NodeJS/Express</strong>.
                        I have developed frontend applicatons using <strong>React</strong>, and CSS frameworks such as <strong>MaterialUI</strong>.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
