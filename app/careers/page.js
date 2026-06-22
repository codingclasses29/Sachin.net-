import PageHeader from "@/components/PageHeader";
import PageSection from "@/components/PageSection";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import Link from "next/link";
import { site, careerJobs } from "@/lib/data";

export const metadata = {
  title: "Careers — Join Sachin.net Team",
  description: "Open positions — Full Stack Developer, ML Engineer, UI/UX Designer and more.",
};

export default function CareersPage() {
  return (
    <>
      <PageHeader badge="Careers" title="Join Our" highlight="Team" desc="Build the future of websites, software and AI with Sachin.net." />
      <PageSection first>
        <div className="container-narrow space-y-4">
          {careerJobs.map((job, i) => (
            <Reveal key={job.title} delay={i * 80}>
              <div className="card card-p">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="heading-sm">{job.title}</h3>
                    <p className="text-sm text-cyan-400 mt-1">{job.type}</p>
                  </div>
                  <Link href="/contact" className="btn-outline !py-2 !px-4 text-sm">Apply Now</Link>
                </div>
                <p className="mt-3 text-body text-sm">{job.desc}</p>
              </div>
            </Reveal>
          ))}
          <Reveal className="card card-p text-center no-hover">
            <Icon name="mail" className="w-8 h-8 mx-auto text-primary-light" />
            <p className="mt-3 heading-sm text-base">Send Resume</p>
            <a href={`mailto:${site.email}`} className="text-sm text-primary-light hover:underline">{site.email}</a>
          </Reveal>
        </div>
      </PageSection>
    </>
  );
}
