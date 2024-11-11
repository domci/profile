export interface Experience {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
}

export interface EducationEntry {
  degree: string;
  institution: string;
  startDate: string;
  endDate: string;
  details: string[];
}

export interface TechnicalSkills {
  generativeAI: string[];
  cloudPlatforms: string[];
  programmingLanguages: string[];
  databasesAndQuerying: string[];
  dataOrchestrationTools: string[];
  visualizationTools: string[];
  versionControlAndWorkflow: string[];
  containersAndOS: string[];
}

export interface Project {
  title: string;
  screenshot: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  liveUrl: string;
}

export interface ResumeData {
  name: string;
  title: string;
  summary: string;
  experiences: Experience[];
  education: EducationEntry[];
  technicalSkills: TechnicalSkills;
  languages: string[];
  softSkills: string[];
  projects: Project[];
}

export const resumeData: ResumeData = {
  name: 'Dominik',
  title: 'Passionate about AI and Data.',
  summary:
    '+10 years of industry experience in collecting, organizing, analyzing, visualizing data, and deploying various AI- and Data-Products. Customer-oriented, curious, and fast-learning engineer, determined to build amazing data products.',
  experiences: [
    {
      title: 'Senior Machine Learning Engineer',
      company: 'OTTO GmbH & Co KG',
      startDate: 'Jan. 2024',
      endDate: 'Present',
      responsibilities: [
        'GenAI-based Partner Chat-Bot with RAG pipeline in Azure Cloud',
        'enforcement of Chatbot security, compliance and quality of answers',
        'Kill Switch for all team projects to handle critical security issues',
        'Budget Watchdog for Azure resources',
        'Sparring partner for business and product teams on GenAI and ML topics',
        'Responsible for data and IT security protocols within the team',
      ],
    },
    {
      title: 'Senior Data Engineer ML',
      company: 'Everstores Technologies GmbH',
      startDate: 'Feb. 2023',
      endDate: 'Dec. 2024',
      responsibilities: [
        'comprehensive ML framework utilizing Cookiecutter, Vertex AI, DVC, and KubeFlow',
        'ML pipelines for on supply chain demand projections, revenue forecasting, and shop acquisition price estimations',
        'Integrated AI chat functionalities into primary brand management dashboards',
        'Designed and maintained data pipelines using Dagster, dbt, BigQuery, and various data sources',
        'Extracted contact details via web scraping for B2B campaigns',
      ],
    },
    {
      title: 'Expert Data Developer',
      company: 'Bonprix GmbH & Co. KG',
      startDate: 'June 2020',
      endDate: 'Jan. 2023',
      responsibilities: [
        'Developed and deployed a new ML model for webshop recommendations (ThoR)',
        'Created ML pipelines in GCP using Vertex AI, Argo, KubeFlow, MLFlow, and Kubernetes',
        'Designed CI/CD pipelines for ML-Ops with KubeFlow, MLFlow, and GitLab',
        'Refactored legacy recommender systems from PySpark to Vertex AI',
        'Developed data pipelines in BigQuery and Argo',
        'Migrated Hadoop/Spark-based data science projects to Google Cloud Platform',
        'Technically designed Data Science dev-environment on Google Cloud Vertex AI',
        'Trained and onboarded data scientists in BigQuery and Google Vertex AI',
      ],
    },
    {
      title: 'Analytical Consultant',
      company: 'Google Germany GmbH',
      startDate: 'Aug. 2019',
      endDate: 'June 2020',
      responsibilities: [
        'Drive customers marketing performance on Google',
        'Causal impact analysis for video campaigns',
        'Identification of new market opportunities for customers and Google',
        'ETL pipelines for internal workflows and data exchange with customers',
        'Proving performance of Google advertising products to customers',
        'Internal and client facing dashboards',
      ],
    },
    {
      title: 'Manager User Analytics',
      company: 'Xing SE',
      startDate: 'Oct. 2014',
      endDate: 'July 2019',
      responsibilities: [
        'Text classifier for Xing News',
        'ML based optimization of newsletter E-Mail rollout',
        'ML based E-Mail performance optimization',
        'Data enrichment with web scraping',
        'ETL Pipelines for large ML-Datasets',
        'A/B Test initiation and analysis',
        'New tracking concepts for Xing News, Social Interactions and Entity Pages',
        'Dashboard automation in MicroStrategy and Plotly',
        'Sparring partner for ML and data-based product features, aiding in decision-making.',
      ],
    },
  ],
  education: [
    {
      degree: 'M.A. Management & Entrepreneurship Major Management & Controlling / Information Systems',
      institution: 'Leuphana University of Lüneburg',
      startDate: 'Oct. 2012',
      endDate: 'Oct. 2014',
      details: [
        'Master thesis at Micronnexus GmbH (mietwagenmarkt.de): "Konzeption und Umsetzung von Data Mining Verfahren im serviceorientierten eCommerce" (Grade: 1.0)',
        'Rental car price and demand prediction',
        'Credit card fraud detection',
        'Car rental review analysis by building a Yelp.com web crawler',
        'Text-based rental car classification',
        'Studies included:',
        '- Click prediction with user journey data (research project)',
        '- Quantitative sciences (time series analysis, decomposition, and prediction)',
        '- Risk management (Basel III, MaRisk, CAPM)',
        '- Corporate controlling',
        '- Financial management',
      ],
    }
  ],
  projects: [
    {
      title: "unclutter.pages.dev",
      screenshot: {
        src: "/projects/unclutter.png",
        alt: "Resume Builder Dashboard",
        width: 1920,
        height: 1080
      },
      liveUrl: "https://unclutter.pages.dev"
    },
    {
      title: "@LongLifeEasy",
      screenshot: {
        src: "/projects/longlive.png",
        alt: "@LongLifeEasy",
        width: 1920,
        height: 1080
      },
      liveUrl: "https://x.com/LongLifeEasy"
    },
    {
      title: "@BitcoinBottomTop",
      screenshot: {
        src: "/projects/btc.png",
        alt: "@BitcoinBottomTop",
        width: 1920,
        height: 1080
      },
      liveUrl: "https://x.com/btc_bottom_top"
    },
    {
      title: "@OnThisDay",
      screenshot: {
        src: "/projects/onthisday.png",
        alt: "@OnThisDay",
        width: 1920,
        height: 1080
      },
      liveUrl: "https://x.com/I_remebr_today"
    },
    {
      title: "@domLLM",
      screenshot: {
        src: "/projects/domllm.png",
        alt: "@domLLM",
        width: 1920,
        height: 1080
      },
      liveUrl: "https://x.com/DomLLM"
    },
    {
      title: "Quizzly (WiP)",
      screenshot: {
        src: "/projects/quizzly.png",
        alt: "Quizzly",
        width: 1920,
        height: 1080
      },
      liveUrl: ""
    }    ,
    {
      title: "Quantum Crumbs Books",
      screenshot: {
        src: "/projects/quantumcrumbs.png",
        alt: "Quantum Crumbs Books",
        width: 1920,
        height: 1080
      },
      liveUrl: "https://www.amazon.com/dp/B0DLH7WSCF"
    }
  ],
  technicalSkills: {
    generativeAI: [
      'OpenAI', 'Gemini', 'Anthropic', 'Groq', 'LlamaIndex', 'LangChain', 'Vercel AI SDK', 'Hugging Face', 'Cloudflare AI',
    ],
    cloudPlatforms: [
      'GCP', 'Vertex AI', 'BigQuery', 'Pub/Sub', 'CloudRun', 'AppEngine', 'CloudFunctions', 'DataProc', 'Datastore', 'Compute Engine',
      'AWS', 'EC2', 'S3', 'RDS',
      'Azure', 'Azure OpenAI', 'Azure Cognitive Services', 'Azure SQL', 'Container Apps', 'VMs'
    ],
    programmingLanguages: [
      'Python', 'Typescript', 'Next.js', 'R', 'SQL', 'NoSQL',
    ],
    databasesAndQuerying: [
      'BigQuery', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'SQLite', 'Exasol', 'DuckDB',
    ],
    dataOrchestrationTools: ['Dagster', 'Airflow', 'Prefect'],
    visualizationTools: [
      'Tableau',
      'Google Data Studio',
      'Looker Studio',
      'MicroStrategy',
      'Plotly',
      'QlikView',
      'Plex',
      'Power BI',
    ],
    versionControlAndWorkflow: ['GitLab', 'GitHub', 'DVC'],
    containersAndOS: ['Docker', 'Linux', 'Windows', 'macOS'],
  },
  languages: ['Native in German', 'Fluent in English'],
  softSkills: ['Pragmatism', 'Honesty', 'Analytical thinking', 'Problem-solving', 'Motivation', 'Curiosity'],
};
