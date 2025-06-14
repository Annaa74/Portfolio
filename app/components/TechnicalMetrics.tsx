'use client';

import { motion } from 'framer-motion';

export default function TechnicalMetrics() {
	return (
		<section className="py-20 px-4 bg-gray-900/50">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center">
					Impact & Achievements
				</motion.h2>

				<div className="grid grid-cols-1 gap-12">
					{/* ML Engineering & Projects */}
					<div>
						<h3 className="text-xl font-semibold mb-6 text-green-400">Machine Learning Engineering</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">ML Model Performance</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Achieved 85% accuracy in anomaly detection systems</li>
									<li>• Built sentiment analysis models with 92% accuracy</li>
									<li>• Deployed systems with 99.9% uptime</li>
								</ul>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">System Optimization</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Improved processing efficiency by 30%</li>
									<li>• Reduced emergency response time by 30%</li>
									<li>• Automated pipelines reducing manual effort by 40%</li>
								</ul>
							</motion.div>
						</div>
					</div>

					{/* Hackathon Success & Leadership */}
					<div>
						<h3 className="text-xl font-semibold mb-6 text-green-400">Hackathon Success & Leadership</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Competition Achievements</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• SIH&apos;24 Runner-Up (National Level)</li>
									<li>• UHACK 3.0 Winner (National Level)</li>
									<li>• 15+ hackathons participated</li>
								</ul>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Team Leadership</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Led 2 hackathon teams in college</li>
									<li>• Built network with 100+ industry professionals</li>
									<li>• Mentored teams in AI/ML solution development</li>
								</ul>
							</motion.div>
						</div>
					</div>

					{/* Community Impact & Content Creation */}
					<div>
						<h3 className="text-xl font-semibold mb-6 text-green-400">Community Impact & Content Creation</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Podcast & Education</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• Created &apos;House of Turing&apos; AI/ML podcast on Spotify</li>
									<li>• Educational content reaching AI/ML community</li>
									<li>• Promoting AI/ML awareness and learning</li>
								</ul>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Professional Network</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• 1.5K+ LinkedIn followers</li>
									<li>• Strong connections with industry professionals</li>
									<li>• Active in AI/ML community building</li>
								</ul>
							</motion.div>
						</div>
					</div>

					{/* Technical Expertise & Certifications */}
					<div>
						<h3 className="text-xl font-semibold mb-6 text-green-400">Technical Expertise & Certifications</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Full-Stack ML Development</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• End-to-end ML pipeline development</li>
									<li>• Cloud deployment expertise (AWS/GCP)</li>
									<li>• Full-stack integration with React/Django</li>
								</ul>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
							>
								<h4 className="text-lg font-semibold text-gray-300">Professional Certifications</h4>
								<ul className="mt-2 space-y-2 text-gray-400">
									<li>• IBM iX Certified</li>
									<li>• Postman Certified</li>
									<li>• Specialized in AI/ML & IoT</li>
								</ul>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}