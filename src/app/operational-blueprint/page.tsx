
import Header from '@/components/header';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function OperationalBlueprintPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex flex-col gap-8 p-4 md:p-8">
        <div className="max-w-4xl mx-auto w-full">
          <Button asChild variant="ghost" className="mb-4 -ml-4">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>

          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">🌿 The AI Forest Operational Blueprint</CardTitle>
              <CardDescription>
                A living document describing exactly how this project works behind the scenes.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8 pt-6">
              <section>
                <h3 className="text-2xl font-semibold mb-3">🌱 1. Vision & Purpose</h3>
                <p className="text-muted-foreground mb-4">
                  The AI Forest is an experimental climate fantasy and regenerative art installation designed to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Inspire eco-anxious generations through a poetic story universe.</li>
                  <li>Create measurable positive impact on the Mojave Desert ecosystem.</li>
                  <li>Prototype a gamified funding and engagement model that shows how art and technology can regenerate land.</li>
                  <li>Build a transparent, community-supported framework anyone can learn from.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-2xl font-semibold mb-3">🌿 2. Project Components</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg">a) Digital Experience</h4>
                    <p className="text-muted-foreground">An interactive website and app where participants:</p>
                    <ul className="list-disc list-inside ml-4 space-y-1 text-muted-foreground">
                      <li>Read and explore the fictional AI Forest narrative.</li>
                      <li>Earn Chrysalis Coins and regenerative milestones.</li>
                      <li>Track their collective impact in real time.</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">b) Physical Installation</h4>
                    <p className="text-muted-foreground">A real-world plot (~12,000 sq ft) in the Mojave Desert, cultivated with:</p>
                     <ul className="list-disc list-inside ml-4 space-y-1 text-muted-foreground">
                        <li>Native oak, olive, desert willow, and milkweed.</li>
                        <li>Compost and mulch improving soil health.</li>
                        <li>Sensors tracking soil moisture, temperature, and biodiversity indicators.</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">c) Regenerative Data Model</h4>
                    <p className="text-muted-foreground">A framework translating digital engagement into tangible outcomes:</p>
                     <ul className="list-disc list-inside ml-4 space-y-1 text-muted-foreground">
                        <li>Square feet restored</li>
                        <li>CO₂ sequestered</li>
                        <li>Water retained</li>
                        <li>Biodiversity supported</li>
                    </ul>
                  </div>
                   <div>
                    <h4 className="font-semibold text-lg">d) Community Participation</h4>
                     <ul className="list-disc list-inside ml-4 space-y-1 text-muted-foreground">
                        <li>Volunteers help plant, maintain, and document progress.</li>
                        <li>Donors fund materials, technology, and labor.</li>
                        <li>Participants spread awareness, learn, and share their stories.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-semibold mb-3">🌿 3. Funding & Financial Stewardship</h3>
                <div className="space-y-4">
                    <div>
                        <h4 className="font-semibold text-lg">Revenue Sources:</h4>
                        <ul className="list-disc list-inside ml-4 space-y-1 text-muted-foreground">
                            <li>Personal seed funding from the Founder</li>
                            <li>Individual donations</li>
                            <li>Small grants (targeted for conservation & arts)</li>
                            <li>Voluntary memberships</li>
                            <li>Digital collectibles (Chrysalis Coins)</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-lg">Use of Funds:</h4>
                        <p className="text-muted-foreground mb-2">Every $1 is allocated approximately as follows:</p>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                <TableHead>Category</TableHead>
                                <TableHead className="text-right">% of Each Dollar</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow><TableCell>Regenerative Supplies (seeds, compost, irrigation)</TableCell><TableCell className="text-right">35%</TableCell></TableRow>
                                <TableRow><TableCell>Technology (sensors, hosting, development)</TableCell><TableCell className="text-right">20%</TableCell></TableRow>
                                <TableRow><TableCell>Labor & Maintenance (site work, installations)</TableCell><TableCell className="text-right">20%</TableCell></TableRow>
                                <TableRow><TableCell>Storytelling & Education</TableCell><TableCell className="text-right">15%</TableCell></TableRow>
                                <TableRow><TableCell>Reserve & Contingency Fund</TableCell><TableCell className="text-right">5%</TableCell></TableRow>
                                <TableRow><TableCell>Admin & Compliance</TableCell><TableCell className="text-right">5%</TableCell></TableRow>
                            </TableBody>
                        </Table>
                         <p className="text-muted-foreground text-sm mt-2">(This allocation is reviewed quarterly and adjusted transparently.)</p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-lg">Reporting:</h4>
                        <ul className="list-disc list-inside ml-4 space-y-1 text-muted-foreground">
                            <li>Quarterly impact reports</li>
                            <li>Annual financial summaries</li>
                            <li>Public data dashboard showing aggregated metrics</li>
                        </ul>
                    </div>
                </div>
              </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-3">🌿 4. Impact Verification & Data Integrity</h3>
                    <div className="space-y-4">
                        <div>
                            <h4 className="font-semibold text-lg">Baseline Data</h4>
                            <ul className="list-disc list-inside ml-4 space-y-1 text-muted-foreground">
                                <li>Initial soil and biodiversity assessment completed.</li>
                                <li>Baseline CO₂, water retention, and species counts documented.</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-lg">Ongoing Tracking</h4>
                            <ul className="list-disc list-inside ml-4 space-y-1 text-muted-foreground">
                                <li>Soil moisture sensors</li>
                                <li>Temperature and microclimate monitoring</li>
                                <li>Visual wildlife observation logs</li>
                                <li>Manual tracking of plant survival and growth</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-lg">Transparency Mechanisms</h4>
                            <ul className="list-disc list-inside ml-4 space-y-1 text-muted-foreground">
                                <li>Each milestone has a documented, timestamped verification.</li>
                                <li>Donors receive quarterly impact snapshots.</li>
                                <li>Public can view anonymized cumulative impact data at any time.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-3">🌿 5. Disaster Preparedness & Risk Management</h3>
                    <div className="space-y-4">
                        <div>
                            <h4 className="font-semibold text-lg">Potential Risks:</h4>
                            <ul className="list-disc list-inside ml-4 space-y-1 text-muted-foreground">
                                <li>Wildfire</li>
                                <li>Theft or vandalism</li>
                                <li>Drought and heatwaves</li>
                                <li>Funding shortfalls</li>
                                <li>Regulatory or land access changes</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-lg">Preparedness Strategies:</h4>
                            <ul className="list-disc list-inside ml-4 space-y-1 text-muted-foreground">
                                <li>Fire breaks and defensible zones</li>
                                <li>Locked equipment storage</li>
                                <li>Mulch and irrigation strategies to retain soil moisture</li>
                                <li>Diverse funding streams</li>
                                <li>Clear land use agreements</li>
                                <li>Disaster insurance where feasible</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-3">🌿 6. Community & Volunteer Guidelines</h3>
                     <div className="space-y-4">
                        <div>
                            <h4 className="font-semibold text-lg">Ways to Participate:</h4>
                            <ul className="list-disc list-inside ml-4 space-y-1 text-muted-foreground">
                                <li>Digital engagement: reading, sharing, and completing challenges.</li>
                                <li>On-site volunteering: planting, watering, installing sensors.</li>
                                <li>Donating or sponsoring a specific impact milestone.</li>
                                <li>Sharing feedback and co-creating story content.</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-lg">Volunteer Commitments:</h4>
                            <ul className="list-disc list-inside ml-4 space-y-1 text-muted-foreground">
                                <li>Respect the land and wildlife.</li>
                                <li>Follow safety protocols.</li>
                                <li>Honor the spirit of experimentation and learning.</li>
                            </ul>
                        </div>
                         <div>
                            <h4 className="font-semibold text-lg">Code of Conduct:</h4>
                            <p className="text-muted-foreground">All participants agree to uphold a culture of mutual respect, inclusion, and transparency.</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-3">🌿 7. Roadmap & Timeline</h3>
                    <Table>
                        <TableHeader>
                            <TableRow>
                            <TableHead>Stage</TableHead>
                            <TableHead>Timeline</TableHead>
                            <TableHead>Milestone</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow><TableCell>Spark & Foundation</TableCell><TableCell>3 Months</TableCell><TableCell>Roadmap + Black Paper published</TableCell></TableRow>
                            <TableRow><TableCell>Build & Beta</TableCell><TableCell>4 Months</TableCell><TableCell>Beta App Launch</TableCell></TableRow>
                            <TableRow><TableCell>Launch & Amplify</TableCell><TableCell>3 Months</TableCell><TableCell>Public Launch & Grant Dossier</TableCell></TableRow>
                        </TableBody>
                    </Table>
                    <p className="text-muted-foreground text-sm mt-2">(See detailed timeline at: [your project site URL])</p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-3">🌿 8. Legal & Intellectual Property</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>All creative works (stories, visuals, names) © The AI Forest Project.</li>
                        <li>Open data and impact metrics shared under Creative Commons Attribution-NonCommercial.</li>
                        <li>Digital collectibles and Chrysalis Coins licensed for personal use and display.</li>
                        <li>All contributions tracked and acknowledged with consent.</li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-3">🌿 9. Contact & Transparency</h3>
                    <div className="space-y-4 text-muted-foreground">
                        <div>
                            <h4 className="font-semibold text-lg">Founder:</h4>
                            <p>[Your Name]<br/>[Your Email]<br/>[Project Website]</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-lg">Public Updates:</h4>
                            <ul className="list-disc list-inside ml-4">
                                <li>Website news feed</li>
                                <li>Email newsletter</li>
                                <li>Community calls (quarterly)</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-lg">Feedback & Questions:</h4>
                            <p>We welcome all inquiries and suggestions. Your participation makes this experiment stronger.</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-3">🌿 10. Living Document</h3>
                    <p className="text-muted-foreground mb-2">This blueprint will be updated regularly to reflect:</p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>New partnerships</li>
                        <li>Evolving funding structures</li>
                        <li>Lessons learned from the field</li>
                    </ul>
                    <p className="text-sm text-muted-foreground mt-4">Last Updated: [Month, Year]</p>
                </section>

            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
