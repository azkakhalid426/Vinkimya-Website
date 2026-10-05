'use client';

import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';

export default function Contact() {
  const offices = [
    {
      number: '01',
      country: 'Pakistan',
      label: 'Head Office',
      address: (
        <>
          Plot#4, ST. Factory Zone,
          <br />
          Al-Raai Road, Jia Musa,
          <br />
          Shahdrah, Lahore, Pakistan
        </>
      ),
      mapUrl:
        'https://www.google.com/maps/search/?api=1&query=Plot%234%2C%20ST.%20Factory%20Zone%2C%20Al-Raai%20Road%2C%20Jia%20Musa%20Shahdrah%2C%20Lahore%2C%20Pakistan',
      phones: [
        {
          number: '+92 (42) 37932518/19',
          href: 'tel:+924237932518',
        },
        {
          number: '+92 (42) 111-111-411',
          href: 'tel:+9242111111411',
        },
      ],
    },
    {
      number: '02',
      country: 'United States',
      label: 'International Office',
      address: (
        <>
          12100 Gore Meadow Dr,
          <br />
          Nokesville, Virginia 20181,
          <br />
          United States
        </>
      ),
      mapUrl:
        'https://www.google.com/maps/search/?api=1&query=12100%20Gore%20Meadow%20Dr%2C%20Nokesville%2C%20Virginia%2020181%2C%20USA',
      phones: [
        {
          number: '+1 (847) 393-5933',
          href: 'tel:+18473935933',
        },
      ],
      
    },
  ];

  return (
    <main className="overflow-hidden bg-white text-[#26352d]">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#6FAF45]">

        {/* Decorative elements */}
        <div className="absolute -right-36 -top-36 h-[520px] w-[520px] rounded-full border border-white/20" />

        <div className="absolute -right-10 top-16 h-[310px] w-[310px] rounded-full border border-white/15" />

        <div className="absolute -bottom-40 -left-32 h-[480px] w-[480px] rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto max-w-[1450px] px-6 pb-24 pt-16 sm:px-10 lg:px-16 lg:pb-32 lg:pt-24">

          {/* Page title */}
          <div className="mb-16 flex items-center gap-4">
            <span className="h-[2px] w-12 bg-white" />

            <p className="text-sm font-bold uppercase tracking-[0.3em] text-white">
              Contact Us
            </p>
          </div>

          <div className="max-w-5xl">

            <h1 className="text-[clamp(3.5rem,8vw,8rem)] font-light leading-[0.88] tracking-[-0.07em] text-white">
              Let&apos;s
              <br />
              <span className="font-semibold text-[#EAF6DF]">
                connect.
              </span>
            </h1>

            <p className="mt-12 max-w-2xl text-lg leading-8 text-white/90 sm:text-xl">
              Whether you are looking for chemical products,
              international sourcing, distribution opportunities,
              or a long-term business partnership, our team is
              ready to connect with you.
            </p>

          </div>

          {/* Quick information */}
          <div className="mt-20 grid border-t border-white/25 pt-7 sm:grid-cols-3">

            <div className="border-b border-white/15 pb-6 sm:border-b-0 sm:border-r sm:pb-0">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                Presence
              </p>

              <p className="mt-2 text-lg text-white">
                Pakistan &amp; United States
              </p>
            </div>

            

            <div className="pt-6 sm:px-8 sm:pt-0">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                General Inquiries
              </p>

              <a
                href="mailto:info@vinkimya.com"
                className="mt-2 inline-flex items-center gap-2 text-lg text-white transition-opacity hover:opacity-75"
              >
                info@vinkimya.com
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

          </div>
        </div>
      </section>
      

      {/* =========================================================
          OFFICES
      ========================================================= */}
      <section className="bg-[#EAF4E4]">

        <div className="mx-auto max-w-[1450px] px-6 sm:px-10 lg:px-16">

          {offices.map((office, index) => (
            <div
              key={office.country}
              className={`relative py-20 lg:py-28 ${
                index !== offices.length - 1
                  ? 'border-b border-[#C5DBB8]'
                  : ''
              }`}
            >

              {/* Decorative large number */}
              <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 select-none text-[11rem] font-bold leading-none tracking-[-0.1em] text-[#DCEBD5] sm:text-[16rem] lg:text-[20rem]">
                {office.number}
              </div>


              <div className="relative grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

                {/* Office heading */}
                <div className="flex items-start gap-6">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#6FAF45] text-sm font-bold text-white shadow-sm">
                    {office.number}
                  </div>

                  <div>

                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#5D913B]">
                      {office.label}
                    </p>

                    <h2 className="mt-3 text-4xl font-light tracking-[-0.05em] text-[#263b2c] sm:text-5xl lg:text-6xl">
                      {office.country}
                    </h2>

                    {office.contactPerson && (
                      <div className="mt-7">

                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#81927f]">
                          Contact Person
                        </p>

                        <p className="mt-2 text-lg font-semibold text-[#36503b]">
                          {office.contactPerson}
                        </p>

                      </div>
                    )}

                  </div>
                </div>


                {/* Office details */}
                <div className="relative">

                  <div className="grid gap-7 md:grid-cols-2">

                    {/* Address */}
                    <div className="rounded-2xl border border-[#C8DDBF] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">

                      <div className="mb-6 flex items-center gap-3">

                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6FAF45] text-white">
                          <MapPin className="h-4 w-4" />
                        </div>

                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#71816f]">
                          Address
                        </p>

                      </div>

                      <a
                        href={office.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block"
                      >

                        <p className="text-lg leading-8 text-[#33463a] transition-colors group-hover:text-[#5D913B]">
                          {office.address}
                        </p>

                        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#5D913B]">
                          View on Google Maps

                          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </span>

                      </a>

                    </div>


                    {/* Contact */}
                    <div className="rounded-2xl border border-[#C8DDBF] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">

                      <div className="mb-6 flex items-center gap-3">

                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6FAF45] text-white">
                          <Phone className="h-4 w-4" />
                        </div>

                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#71816f]">
                          Contact
                        </p>

                      </div>


                      {/* Phone numbers */}
                      <div className="space-y-4">

                        {office.phones.map((phone) => (
                          <a
                            key={phone.href}
                            href={phone.href}
                            className="group flex items-center gap-3 text-lg text-[#33463a] transition-colors hover:text-[#5D913B]"
                          >

                            <Phone className="h-4 w-4 text-[#6FAF45]" />

                            <span>
                              {phone.number}
                            </span>

                            <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />

                          </a>
                        ))}

                      </div>


                      {/* Email */}
                      <a
                        href="mailto:info@vinkimya.com"
                        className="group mt-6 flex items-center gap-3 border-t border-[#E0EADB] pt-6 text-lg text-[#33463a] transition-colors hover:text-[#5D913B]"
                      >

                        <Mail className="h-4 w-4 text-[#6FAF45]" />

                        <span>
                          info@vinkimya.com
                        </span>

                        <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />

                      </a>

                    </div>

                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>
      </section>


      {/* =========================================================
          FINAL CTA
          NO FOOTER HERE — YOUR GLOBAL FOOTER WILL FOLLOW
      ========================================================= */}
      <section className="bg-[#6FAF45]">

        <div className="mx-auto max-w-[1450px] px-6 py-16 sm:px-10 lg:px-16 lg:py-20">

          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            <div className="max-w-3xl">

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/75">
                Let&apos;s Work Together
              </p>

              <h2 className="mt-3 text-3xl font-light tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
                Looking for a reliable chemical partner?
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-white/80">
                Get in touch with VinKimya for chemical sourcing,
                distribution, and international business opportunities.
              </p>

            </div>

            <a
              href="mailto:info@vinkimya.com"
              className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-bold text-[#5D913B] shadow-sm transition-all duration-300 hover:bg-[#F2F8EE] hover:shadow-lg"
            >
              Contact Our Team

              <ArrowUpRight className="h-4 w-4" />
            </a>

          </div>
        </div>
      </section>

    </main>
  );
}