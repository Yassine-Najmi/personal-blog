import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function About({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    About
                </h2>
            }
        >
            <Head title="About" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="py-12 px-16 text-gray-900">
                            <h3 className="text-2xl font-semibold mb-4">
                                About This Blog
                            </h3>
                            <p>Welcome to my Personal Blog!</p>
                            <br />
                            <p>
                                This platform is a demonstration of my skills
                                and knowledge in web development, utilizing
                                <strong> Laravel</strong> ,{" "}
                                <strong>ReactJS</strong>,{" "}
                                <strong>Tailwind CSS</strong>, and{" "}
                                <strong>InertiaJS</strong>.
                            </p>

                            <h3 className="text-2xl font-semibold mt-8 mb-4">
                                Why I Created This Project
                            </h3>
                            <p>
                                I built this project as a means to practice and
                                showcase my proficiency in these technologies.
                                It serves as a learning resource for others who
                                are interested in exploring the capabilities of
                                <strong> Laravel</strong> ,{" "}
                                <strong>ReactJS</strong>,{" "}
                                <strong>Tailwind CSS</strong>, and{" "}
                                <strong>InertiaJS</strong>.
                            </p>

                            <h3 className="text-2xl font-semibold mt-8 mb-4">
                                Exploring the Features
                            </h3>
                            <p>
                                Feel free to browse through the various
                                functionalities of this project, including
                                browsing blog posts, reading full articles, and
                                exploring categories and tags associated with
                                each post. While this project may not contain
                                actual blog content, it provides a solid
                                foundation for understanding how to implement
                                such features in a production environment.
                            </p>

                            <h3 className="text-2xl font-semibold mt-8 mb-4">
                                Join Me in Learning
                            </h3>
                            <p>
                                Whether you're a fellow developer looking to
                                sharpen your skills or simply curious about the
                                technologies used in this project, I encourage
                                you to explore, experiment, and learn alongside
                                me. Clone this project, tinker with the code,
                                and see how you can customize and extend it to
                                fit your own requirements.
                            </p>
                            <br />
                            <p>
                                Thank you for visiting, and I hope this project
                                serves as a valuable resource in your journey of
                                learning and growth!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
