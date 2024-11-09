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
  cloudPlatforms: string[];
  programmingLibraries: string[];
  databasesAndQuerying: string[];
  dataOrchestrationTools: string[];
  visualizationTools: string[];
  versionControlAndWorkflow: string[];
  containersAndOS: string[];
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
}

export const resumeData: ResumeData = {
  name: 'Dominik',
  title: 'Passionate about Data.',
  summary:
    '+9 years of industry experience in collecting, organizing, analyzing, visualizing data, and deploying various ML- and Data-Products. Customer-oriented, curious, and fast-learning engineer, determined to build amazing data products.',
  experiences: [
    {
      title: 'Senior Machine Learning Engineer',
      company: 'OTTO GmbH & Co KG',
      startDate: 'Jan. 2024',
      endDate: 'Present',
      responsibilities: [
        'Developed a GenAI-based Partner Chat-Bot with RAG pipeline in Azure Cloud',
        'Introduced a Kill Switch for all team projects to handle critical security issues',
        'Implemented a Budget Watchdog for Azure resources',
        'Acted as a sparring partner for business and product teams on GenAI and ML topics',
        'Oversaw security protocols within the team',
      ],
    },
    {
      title: 'Senior Data Engineer ML',
      company: 'Everstores Technologies GmbH',
      startDate: 'Feb. 2023',
      endDate: 'Dec. 2024',
      responsibilities: [
        'Established a comprehensive ML framework utilizing Cookiecutter, Vertex AI, DVC, and KubeFlow',
        'Created ML pipelines focusing on supply chain demand projections, revenue forecasting, and shop acquisition price estimations',
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
      company: 'Google Germany GmbH (Contractor via Adecco)',
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
    },
    {
      degree: 'Dual B.A. Studies: BWL Gastronomiemanagement',
      institution: 'McDonald’s Franchisee Wilfried Cichon e.K. & IBA - University of Cooperative Education',
      startDate: 'Oct. 2009',
      endDate: 'Sept. 2012',
      details: [
        'Bachelor thesis: "Balanced Scorecard als strategisches Führungsinstrument in der Systemgastronomie" (Grade: 1.0)',
        'Practical training to deputy restaurant manager at McDonald’s',
        'Studies included:',
        '- Statistics',
        '- Economics',
        '- International accounting',
        '- Mathematics',
        '- Marketing',
      ],
    },
    {
      degree: 'Apprenticeship as IT Management Assistant (Informatikkaufmann)',
      institution: 'c.a.r.u.s. Information Technology AG',
      startDate: 'Aug. 2004',
      endDate: 'July 2007',
      details: [],
    },
    {
      degree: 'Advanced Technical College Certificate (Fachhochschulreife)',
      institution: 'Vocational School of Segeberg, Norderstedt',
      startDate: 'Aug. 2002',
      endDate: 'June 2004',
      details: [],
    },
  ],
  technicalSkills: {
    cloudPlatforms: [
      'Google Cloud Platform (Vertex AI, BigQuery, Pub/Sub, CloudRun, AppEngine, CloudFunctions, DataProc, Datastore, Compute Engine)',
      'Amazon AWS (EC2, S3, RDS)',
    ],
    programmingLibraries: [
      'Python (openai, langchain, streamlit, XGBoost, Jupyter, pandas, scikit-learn, spaCy, MLFlow, KubeFlow, Flask, FastAPI, numPy, BeautifulSoup, requests, selenium, PyTorch, Keras, pySpark, TensorFlow, BERT)',
      'LLMs, OpenAI, Google PaLM & Bard, LlamaIndex, LangChain',
    ],
    databasesAndQuerying: [
      'SQL: BigQuery, Exasol, PostgreSQL',
      'NoSQL: MongoDB, Hive, MapR, Redis, Cassandra',
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
    ],
    versionControlAndWorkflow: ['GitLab', 'GitHub', 'DVC'],
    containersAndOS: ['Docker', 'Linux', 'Windows', 'macOS'],
  },
  languages: ['Native in German', 'Fluent in English'],
  softSkills: ['Pragmatism', 'Honesty', 'Analytical thinking', 'Problem-solving', 'Motivation', 'Curiosity'],
};
