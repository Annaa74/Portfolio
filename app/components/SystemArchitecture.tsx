'use client';

import { motion } from 'framer-motion';

export default function SystemArchitecture() {
	return ( 
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				 <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
                >
                    Experiences & Projects
                </motion.h2>
				<div className="grid grid-cols-1 gap-8">
					{[
						{
							role: 'Technical Researcher',
							company: 'The Angaar Batch',
							location: 'Ed-Tech Organization',
							period: 'Present',
							description: 'Technical research and development in educational technology solutions',
							achievements: [
								'Conducting research on emerging educational technologies and AI applications',
								'Contributing to technical documentation and research publications',
								'Collaborating with cross-functional teams on innovative ed-tech solutions',
								'Analyzing market trends and technical feasibility studies',
							],
							tech: ['Research', 'AI/ML', 'Ed-Tech', 'Technical Writing', 'Market Analysis']
						},
						{
							role: 'Data Analyst Intern',
							company: 'Skillcred',
							location: 'Remote',
							period: 'Jan. 2024 – Mar. 2024',
							description: 'Built interactive dashboards and developed statistical forecasting models for executive decision-making',
							achievements: [
								'Built interactive Tableau/Power BI dashboards, improving reporting efficiency by 35%',
								'Developed statistical forecasting models using Python/R with 20% improvement in prediction accuracy',
								'Automated data processing pipelines reducing manual effort by 40%',
								'Enabled real-time analytics capabilities for business stakeholders',
							],
							tech: ['Tableau', 'Power BI', 'Python', 'R', 'SQL', 'Statistical Analysis']
						},
						{
							role: 'Software Engineering Simulation',
							company: 'JPMorgan Chase',
							location: 'Forage Remote',
							period: 'Sep. 2024 – Oct. 2024',
							description: 'Built financial data visualization platform and optimized trading algorithms',
							achievements: [
								'Built financial data visualization platform processing 10K+ data points',
								'Optimized algorithms for trading data processing, achieving 30% runtime reduction through ML',
								'Integrated JPMorgan APIs for automated trading insights',
								'Improved data retrieval efficiency by 25% through API optimization',
							],
							tech: ['Python', 'APIs', 'Machine Learning', 'Financial Data', 'Algorithm Optimization']
						}
					].map((experience, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800"
						>
							<div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
								<div>
									<h3 className="text-2xl font-bold text-blue-400">{experience.role}</h3>
									<p className="text-lg text-gray-300">{experience.company} • {experience.location}</p>
								</div>
								<span className="text-green-400 font-semibold mt-2 md:mt-0">{experience.period}</span>
							</div>
							<p className="text-gray-400 mb-6">{experience.description}</p>
							<div className="mb-6">
								<h4 className="text-lg font-semibold mb-3 text-green-400">Key Achievements:</h4>
								<ul className="space-y-2 text-gray-300">
									{experience.achievements.map((achievement, i) => (
										<li key={i} className="flex items-start">
											<span className="text-green-400 mr-2 mt-1">▸</span>
											{achievement}
										</li>
									))}
								</ul>
							</div>
							<div className="flex flex-wrap gap-2">
								{experience.tech.map((tech, i) => (
									<span key={i} className="text-sm px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
										{tech}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.6 }}
					className="mt-12"
				>
					<h3 className="text-2xl font-bold mb-8 text-center text-green-400">Machine Learning Projects</h3>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
						{[
							{
								title: 'Veera: AI-Powered Women Safety Analytics',
								period: 'Nov. 2024 – Present',
								description: 'ML pipeline for real-time safety analytics with anomaly detection and automated SOS system',
								achievements: [
									'Developed ML pipeline achieving 85% accuracy using ensemble methods',
									'Built automated SOS alert system reducing emergency response time by 30%',
									'Created predictive hotspot mapping using clustering algorithms',
									'Deployed interactive Tableau dashboards for safety insights',
								],
								tech: ['Python', 'TensorFlow', 'Flask', 'PostgreSQL', 'React', 'Tableau']
							},
							{
								title: 'DeepThoughts: NLP-Powered Journaling Intelligence',
								period: 'June 2024 – Aug. 2024',
								description: 'Full-stack ML app with sentiment analysis and personalized recommendations',
								achievements: [
									'Architected sentiment analysis processing 10K+ entries with 92% accuracy using BERT/GPT',
									'Improved user engagement by 20% through ML-driven personalization',
									'Deployed scalable microservices on AWS with 99.9% uptime',
									'Implemented concurrent ML inference capabilities',
								],
								tech: ['Django', 'PyTorch', 'NLTK', 'React', 'AWS', 'BERT', 'GPT']
							},
							{
								title: 'DataNexus: Automated ML Preprocessing Engine',
								period: 'May 2024',
								description: 'Preprocessing pipeline with automated feature engineering and quality checks',
								achievements: [
									'Engineered pipeline supporting 8+ file formats',
									'Achieved 95% data consistency across all supported formats',
									'Reduced preprocessing time by 40% through parallel processing',
									'Implemented automated feature engineering algorithms',
								],
								tech: ['Python', 'Streamlit', 'Scikit-learn', 'Pandas']
							},
							{
								title: 'Think2Action: ML-Driven Project Intelligence',
								period: 'June 2024 – Aug. 2024',
								description: 'Intelligent project management with ML-based task prioritization',
								achievements: [
									'Built ML-based task prioritization system',
									'Implemented NLP for automated requirement analysis',
									'Deployed containerized application on GCP with auto-scaling',
									'Integrated ML model serving capabilities',
								],
								tech: ['React', 'Node.js', 'TensorFlow.js', 'GCP', 'Docker']
							}
						].map((project, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700"
							>
								<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
									<h4 className="text-lg font-bold text-purple-400">{project.title}</h4>
									<span className="text-green-400 text-sm font-semibold mt-1 sm:mt-0">{project.period}</span>
								</div>
								<p className="text-gray-400 mb-4 text-sm">{project.description}</p>
								<div className="mb-4">
									<ul className="space-y-1 text-gray-300 text-sm">
										{project.achievements.map((achievement, i) => (
											<li key={i} className="flex items-start">
												<span className="text-purple-400 mr-2 mt-1">•</span>
												{achievement}
											</li>
										))}
									</ul>
								</div>
								<div className="flex flex-wrap gap-1">
									{project.tech.map((tech, i) => (
										<span key={i} className="text-xs px-2 py-1 bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20">
											{tech}
										</span>
									))}
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}