import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import heroBg from "../../assets/low/about.png";

const Practices = () => {
  return (
    <>
   {/* HERO SECTION */}
         <div id="hero" className="relative w-full ">
           {/* Mobile & Tablet Image */}
           <img
             src={heroBg}
             alt="Practices Hero"
             className="block xl:hidden w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
           />
   
           {/* Desktop Background Image */}
           <div
             className="hidden xl:flex w-full h-[500px] bg-cover bg-center items-center justify-center px-4 lg:px-8"
             style={{
               backgroundImage: `url(${heroBg})`,
             }}
           >
             {/* Optional: You can put text or overlay here if needed */}
           </div>
         </div>

      {/* Centered Content Section */}
      <div className="flex justify-center items-center px-4 py-16">
        <div className="lg:w-1/2 space-y-6">
          <div className="bg-gray-100 shadow-xl rounded-md mx-auto mt-6 sm:mt-12 px-4 sm:px-8 py-6">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 text-center mb-4">
              LIST OF PROFESSIONAL SERVICES THAT RAM RAMAPATI BANK PROVIDES
            </h2>
            <div className="text-base sm:text-lg text-gray-700 leading-relaxed">
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  Instituting and defending all types of Civil Suits such as
                  suits for recovery of any property or suit for grant of
                  temporary and or permanent injunction etc.
                </li>
                <li>Recovery proceedings before the Debt Recovery Tribunal.</li>
                <li>
                  Filing of or defending Complaints before the District
                  Commission, the State Commission and or the National
                  Commission.
                </li>
                <li>
                  Handling of all types of criminal cases viz private criminal
                  complaints, prosecution lodged before the JMFCs, CJM or the
                  ADJ by any government authority against the Occupier or the
                  Manager of the establishment for any alleged non-compliance(s)
                  under any Law and or cases u/s 138 of the NI Act etc.
                </li>
                <li>
                  Filing of or defending all types of complaints/ references
                  before the Labour and the Industrial Court.
                </li>
                <li>
                  Pursue entire Arbitration Proceedings and Execution
                  Proceedings under it as an Advocate and also as an Arbitrator,
                  if required.
                </li>
                <li>
                  Handling of all types of cases before the Co-operative and
                  Co-operative Appellate Courts.
                </li>
                <li>
                  Filing of or defending the writ petitions, appeals/ LPAs and
                  or SLPs before the High Courts and the Supreme Court.
                </li>
                <li>
                  Hearings before the Quasi-judicial Authorities such as ESI
                  Corporation and, Employees Provident Office in respect of
                  matters u/s 45A and or for enquiries u/s 7A, respectively.
                </li>
                <li>
                  Legal Solutions to the industries on any law or the issues, by
                  way of written opinions, as and when required.
                </li>
                <li>
                  Setting-up of or framing effective Contract Labour Management
                  System so as to achieve 100% legal compliance level in respect
                  of all the Contractors.
                </li>
                <li>
                  In respect of transaction related to sale and purchase of
                  property:
                  <ul className="list-inside list-disc space-y-1 mt-2 ml-4">
                    <li>Preparation of Search Report of the property.</li>
                    <li>
                      Drafting of all types of deeds and agreements for sale and
                      or purchase of any property.
                    </li>
                    <li>
                      Registration of the aforesaid documents with the Office of
                      the Sub-Registrar.
                    </li>
                    <li>
                      Mutation of the property in the Office of Municipal
                      Corporation.
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Practices;
