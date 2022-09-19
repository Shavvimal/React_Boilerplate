import React, { useState, useRef, useEffect } from "react";
import { Acordian } from "../../components";

function Timeline() {
  return (
    <section className="relative" id="our-story">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      {/* <div className="absolute inset-0  pointer-events-none mb-16" aria-hidden="true"></div> */}
      {/* <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div> */}

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto pb-12 md:pb-16">
            <h1 className="h2 mb-4 text-white text-center">Privacy Policy</h1>
            <p className="text-md text-white mb-12" data-aos="zoom-y-out">
              NDUK is strongly committed to protecting personal data. This
              privacy statement describes why and how we collect and use
              personal data and provides information about individuals’ rights.
              It applies to personal data provided to us, both by individuals
              themselves or by others. We may use personal data provided to us
              for any of the purposes described in this privacy statement or as
              otherwise stated at the point of collection. “NDUK” (and “we”,
              “us”, or “our”) refers to Nova Duvera UK Limited, the limited
              partnership registered in England under Company No. 13989738 and
              with its registration address at Office 412, 2 Tallis Street,
              London, EC4Y 0AB,and such other NDUK member firm in the UK and
              their subsidiaries that: (1) is a contracting party for the
              purposes of providing or receiving services, (2) posted a position
              for which you are applying, or (3) you have a role or relationship
              with. Each member firm in the NDUK network is a separate legal
              entity and a separate controller for personal data. Personal data
              is any information relating to an identified or identifiable
              living person. When “you” or “your” are used in this statement, we
              are referring to the relevant individual who is the subject of the
              personal data. NDUK processes personal data for numerous purposes,
              and the means of collection, lawful basis of processing, use,
              disclosure, and retention periods for each purpose may differ.
              When collecting and using personal data, our policy is to be
              transparent about why and how we process personal data. To find
              out more about our specific processing activities, please go to
              the relevant sections of this statement.
            </p>
            <div>

            <Acordian />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
