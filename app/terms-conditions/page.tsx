import React from 'react';

const TermsConditionsPage = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-3xl md:text-5xl font-bold text-[#003366] mb-8 text-center">Terms and Conditions</h1>
                <div className="bg-white p-8 rounded-lg shadow-md space-y-6 text-gray-700">
                    <p>Welcome to Aajna Enterprise. These terms and conditions outline the rules and regulations for the use of our website.</p>

                    <h3 className="text-xl font-bold text-[#003366]">1. Agreement to Terms</h3>
                    <p>By accessing this website, we assume you accept these terms and conditions. Do not continue to use Aajna Enterprise if you do not agree to take all of the terms and conditions stated on this page.</p>

                    <h3 className="text-xl font-bold text-[#003366]">2. Intellectual Property Rights</h3>
                    <p>Other than the content you own, under these Terms, Aajna Enterprise and/or its licensors own all the intellectual property rights and materials contained in this Website.</p>

                    <h3 className="text-xl font-bold text-[#003366]">3. Restrictions</h3>
                    <p>You are specifically restricted from all of the following:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Publishing any Website material in any other media.</li>
                        <li>Selling, sublicensing and/or otherwise commercializing any Website material.</li>
                        <li>Publicly performing and/or showing any Website material.</li>
                        <li>Using this Website in any way that is or may be damaging to this Website.</li>
                    </ul>

                    <h3 className="text-xl font-bold text-[#003366]">4. Limitation of Liability</h3>
                    <p>In no event shall Aajna Enterprise, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this Website.</p>
                </div>
            </div>
        </section>
    );
};

export default TermsConditionsPage;
