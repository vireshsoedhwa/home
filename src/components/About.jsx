// src/components/Experience.js
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
                        Hi, my name is <strong>Viresh Soedhwa</strong>, I'm a software engineer based in Vancouver, BC, Canada,
                        focused on building AI-driven agent systems. My background in API design with
                        <strong> Django</strong> and <strong>NodeJS/Express</strong> translates directly to agent tool integration and
                        function calling architectures. I build real-time, event-driven applications using <strong>Websockets</strong> 
                        and <strong>React</strong>, and deploy them on <strong>Kubernetes</strong> with <strong>CI/CD</strong> pipelines
                        &mdash; the same infrastructure patterns needed to run autonomous agents in production.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
