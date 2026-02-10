import React from 'react';

const PrivacyPolicyPage = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-3xl md:text-5xl font-bold text-[#003366] mb-8 text-center">Privacy Policy</h1>
                <div className="bg-white p-8 rounded-lg shadow-md space-y-6 text-gray-700">
                    <p>At Aajna Enterprise, accessible from our website, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by us and how we use it.</p>

                    <h3 className="text-xl font-bold text-[#003366]">Information We Collect</h3>
                    <p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>

                    <h3 className="text-xl font-bold text-[#003366]">How We Use Your Information</h3>
                    <p>We use the information we collect in various ways, including to:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Provide, operate, and maintain our website</li>
                        <li>Improve, personalize, and expand our website</li>
                        <li>Understand and analyze how you use our website</li>
                        <li>Develop new products, services, features, and functionality</li>
                        <li>Communicate with you, either directly or through one of our partners</li>
                    </ul>

                    <h3 className="text-xl font-bold text-[#003366]">Log Files</h3>
                    <p>Aajna Enterprise follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics.</p>
                </div>
            </div>
        </section>
    );
};

export default PrivacyPolicyPage;
