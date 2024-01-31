import { Container } from '@/components/Container'
import { Expandable } from '@/components/Expandable'
import { SectionHeading } from '@/components/SectionHeading'

const tableOfContents = {
  'Introduction to Data Analytics': {
    // 'Getting started': 1,
    // 'Intro to Figma': 15,
    // 'Setting up your first artboard': 20,
    "What is Data Analytics":"",
"Importance of Data Analytics":"",
    "Types of Data":"",
     "Types of Statistical Analysis":"",
                "Steps to obtain a Data Analytics solution":"",
                " Business Understanding":"",
                " Data Understanding":"",
                " Data Collection":"",
                " Data Preparation":"",
                " Data Modelling":"",
                " Deployment":"",
                "Use Case":"",
  },
  "Python for Data Analytics": {
   "Course Contents":"",
   "Python Introduction ":"",
                "Variables & Keywords":"",
                "Datatypes & Operators":"",
                "Data Structures - Lists":"",
                "Data Structures - Tuples":"",
                "Data Structures - Sets":"",
                "Data Structures - Dictionary":"",
                "Loops & Iteration":"",
                "Functions in Python":"",
                'File Handling':"",
                "Map Reduce Filter":"",
                " OOPS Concepts":"",
                "Control Structures in Python":"",
                "NumPy":"",
                "Pandas":"",
                "Data Visualization":"",
                "Matplotlib":"",
                "Seaborn":"",
                "Python Quiz ":"",
  },
  'Exploratory Data Analysis': {
     "Course Contents":"",
                "  Agenda":"",
                "Data Analytics/Science Process":"" ,


                "  What is EDA":"",
                " Visualization":"",
                "Steps involved in EDA (Data Sourcing)":"",
                " Steps involved in EDA (Data Cleaning)":"",
                "Handle Missing Values (Theory)":"",
                "   Handle Missing Values (Code)":"",
                " Feature Scaling":"",
                "Feature Scaling (Standardization)":"",
                "Feature Scaling (Normalization)":"",
                "Feature Scaling (Code)":"",
                "Outlier Treatment (Theory)":"",
                " Outlier Treatment (Code)":"",
                "Invalid Data":"",
                "  Types of Data":"",
                "Types of Analysis":"",
                "Univariate Analysis":"",
                "Bivariate Analysis":"",
                "Multivariate Analysis":"",
                " Numerical Analysis":"",
                "Analysis (Code)":"",
                " Derived Metrics":"",
                "Feature Binning (Theory)":"",
                "Feature Binning (Theory)":"",
                " Feature Binning (Code)":"",
                "Feature Encoding":"",
                "Feature Encoding Detailed":"",
                "Feature Encoding (Code)":"",
                "Case Study":"",
                "Data Exploration (Case Study)":"",
                "Data Cleaning (Case Study)":"",
                "  Univariate Analysis (Case Study)":"",
                " Bivariate Analysis (Case Study)":"",
                "Bivariate Analysis (Case Study)":"",
                "EDA Report (Case Study)":"",
                "EDA Quiz":"",
  },
  'Business Statistics': {
    

                "Intro to Stats":"",

                "Chapter 1 - Agenda":"",

                "Descriptive Stats":"",

                "Inferential Stats":"",

                " Qualitative Data":"",

                "Quantitative Data":"",

                "Chapter 2 - Agenda":"",

                " Population vs Sample":"",

                "Why sampling is important?":"",

                "Types of sampling":""
                ,
                "Probability Sampling":""
                ,
                "Cluster Random Sampling":"",

                " Non probability sampling":""
                ,
                "Chapter 3 - Agenda":""
                ,
                "Measures of Central Tendency":""
                ,
                " Mean":""
                ,
                " Median":""
                ,
                "Mode":"",

                "Measures of Dispersion":"",

                "   Range":"",

                "   IQR":""
                ,
                "Mean Deviation":""
                ,
                " Variance & Standard Deviation":"",

                " Why n-1 and not n":"",

                "Chapter 4 - Agenda":"",

                "Probability":"",

                "Addition Rule":"",

                "Independent Events":"",

                "Cumulative Probability":""
                ,
                "Conditional Probability":"",

                " Bayes Theorem Part 1":"",

                "Bayes Theorem Part 2":"",

                "Chapter 5 - Agenda":"",

                " Uniform Distribution":"",

                "                Binomial Distribution":"",
                "    Poisson Distribution":"",

                "Normal Distribution Part 1":"",

                "      Normal Distribution Part 2":"",

                "Skewness":"",

                "Kurtosis":"",
                "Calculating Probability with Z-Score":"",

                "Z-Score Calculation Table":"",

                'Example':"",

                "Chapter 6 Agenda":"",

                "Correlation vs Covariance":"",

                " Covariance":"",

                "Correlation":"",

                "Chapter 7 - Agenda":""
                ,
                " Hypothesis Testing":"",

                "Tailed Tests":"",

                " What is p-value?":""
                ,
                "Types of Tests":""
                ,
                "   T Test":""
                ,
                "  Z Test":"",

                " ANOVA":"",

                "Chi Square":"",

                " Correlation":"",

                "Statistcs Quiz":"",

                "Intro to Stats":"",

                "Chapter 1 - Agenda":"",

                "Descriptive Stats":"",

                "Inferential Stats":"",

                " Qualitative Data":"",

                "Quantitative Data":"",

                "Chapter 2 - Agenda":"",

                " Population vs Sample":"",

                "Why sampling is important?":"",

                "Types of sampling":""
                ,
                "Probability Sampling":""
                ,
                "Cluster Random Sampling":"",

                " Non probability sampling":""
                ,
                "Chapter 3 - Agenda":""
                ,
                "Measures of Central Tendency":""
                ,
                " Mean":""
                ,
                " Median":""
                ,
                "Mode":"",

                "Measures of Dispersion":"",

                "   Range":"",

                "   IQR":""
                ,
                "Mean Deviation":""
                ,
                " Variance & Standard Deviation":"",

                " Why n-1 and not n":"",

                "Chapter 4 - Agenda":"",

                "Probability":"",

                "Addition Rule":"",

                "Independent Events":"",

                "Cumulative Probability":""
                ,
                "Conditional Probability":"",

                " Bayes Theorem Part 1":"",

                "Bayes Theorem Part 2":"",

                "Chapter 5 - Agenda":"",

                " Uniform Distribution":"",

                "                Binomial Distribution":"",
                "    Poisson Distribution":"",

                "Normal Distribution Part 1":"",

                "      Normal Distribution Part 2":"",

                "Skewness":"",

                "Kurtosis":"",
                "Calculating Probability with Z-Score":"",

                "Z-Score Calculation Table":"",

                'Example':"",

                "Chapter 6 Agenda":"",

                "Correlation vs Covariance":"",

                " Covariance":"",

                "Correlation":"",

                "Chapter 7 - Agenda":""
                ,
                " Hypothesis Testing":"",

                "Tailed Tests":"",

                " What is p-value?":""
                ,
                "Types of Tests":""
                ,
                "   T Test":""
                ,
                "  Z Test":"",

                " ANOVA":"",

                "Chi Square":"",

                " Correlation":"",

                "Statistcs QUIZ":"" ,
  },
   "SQL for Data Analysis": {
    "Course Contents":"",
                "Data Architecture - File server vs Client server":"",
                "Installation of MySQL Workbench":"",
                "Introduction to SQL":"",
                "Constraints in SQL":"",
                "Table Basics - DDLs":"",
                "Table Basics - DQLs":"",
                "Table Basics - DMLs":"",
                "Joins in SQL":"",
                "Data Import & Export":"",
                "Aggregation Functions":"",
                "String Functions":"",
                "Date Time Functions":"",
                "Regular Expressions":"",
                "Nested Queries":"",
                "Views":"",
                "Stored Procedures":"",
                "Windows Function":"",
                "SQL-Python connectivity":"",
                "SQL Quiz":"",
  },
   "SQL for Data Analysis": {
   
            
                "Course Contents":"",
                "Data Architecture - File server vs Client server":"",
                "Installation of MySQL Workbench":"",
                "Introduction to SQL":"",
                "Constraints in SQL":"",
                "Table Basics - DDLs":"",
                "Table Basics - DQLs":"",
                "Table Basics - DMLs":"",
                "Joins in SQL":"",
                "Data Import & Export":"",
                "Aggregation Functions":"",
                "String Functions":"",
                "Date Time Functions":"",
                "Regular Expressions":"",
                "Nested Queries":"",
                "Views":"",
                "Stored Procedures":"",
                "Windows Function":"",
                "SQL-Python connectivity":"",
                "SQL Quiz":"",
  },
   "Microsoft Excel" :{
  
                "Course Contents":"",
                "Pre-defined Functions":"",
                "Datetime Functions":"",
                "String Functions":"",
                "Mathematical Functions":"",
                "Lookup (Hlookup,Vlookup)":"",
                "Logical & Error Functions":"",
                "Statistical Functions":"",
                "Images in Excel":"",
                "Excel Formatting":"",
                "Custom Formatting":"",
                "Conditional Formatting":"",
                "Charts in Excel":"",
                "Data Analysis using Excel":"",
                "Pivot Tables":"",
                "Dashboarding in Excel":"",
                "Others":"",
                "Excel Quiz":"",
  },
   "Power BI": {
    
           
                "Course Contents":"",
                "Introduction":"",
                "Introduction to Power BI":"",
                "Life Hack to get Power BI Pro [2022]":"",
                "Power BI Desktop":"",
                "Power BI Services":"",
                "Power Query Editor":"",
                "Data Profiling":"",
                "PBI Group by":"",
                "PBI Applied Steps":"",
                "Append vs Merge":"",
                "PBI Visuals":"",
                "Power BI Charts":"",
                "Introduction to DAX":"",
                "Implicit Measures":"",
                "DAX Formula":"",
                "Basic DAX Functions":"",
                "Date Functions":"",
                "CALENDAR Functions":"",
                "Contexts Row vs Filter":"",
                "CALCULATE & FILTER Functions":"",
                "IF ELSE Conditions":"",
                "Time Intelligence Functions":"",
                "X vs Non X Functions":"",
                "Tool tips , Drill Throughs":"",
                "Relationships":"",
                "KPIs":"",
                "Administration in Power BI":"",
                "Security in Power BI":"",
                "PBI Best Practices":"",
                "Formatting":"",
                "EDA":"",
                "Power BI Quiz":"",
   },
     "Tableau": {
  
                "Course Contents":"",
                "What is Data Visualization":"",
                "BI Process":"",
                "About Tableau - What is Tableau?":"",
                "About Tableau - how to use Tableau?":"",
                "About Tableau - Features of Tableau":"",
                "Tableau Architecture":"",
                "Tableau vs Power BI":"",
                "Tableau Desktop":"",
                "Relationships, Joins & Unions":"",
                "Sets in Tableau":"",
                "Groups in Tableau":"",
                "Hierarchies in Tableau":"",
                "Filters in Tableau":"",
                "Highlighting":"",
                "Device Deisgner":"",
                "Parameters":"",
                "Data Blending & Mark Size":"",
                "Transparency":"",
                "Date Aggregation":"",
                "Generated Fields":"",
                "Discrete vs Continuous":"",
                "Charts in Tableau":"",
                "Pivot Tables in Tableau":"",
                "LOD Expressions":"",
                "Calculated Fields":"",
                "Formatting":"",
                "Forecasting in Tableau":"",
                "Analytics in Tableau":"",
                "Dashboarding":"",
                "Tableau Quiz":"",
  },
    "Predictive Analytics": {
   
                "Course Contents":"",
                "Introduction to PA":"",
                "Predictive Analytics Process":"",
                "How does the Model Work?":"",
                "Why Predictive Modelling?":"",
                "Applications of Predictive Modelling":"",
                "What is Machine Learning":"",
                "Types of Machine Learning":"",
                "Classification":"",
                "k-nearest neighbors (Theory)":"",
                "k-NN Example (Excel)":"",
                "Classification Practicals Part 1":"",
              "  k-nearest neighbors ":"",
                "Decision Trees (Theory)":"",
                "Decision Tree (Code)":"",
                "Random Forests":"",
                "Random Forests (Code)":"",
                "Boosting Algorithms":"",
                "Boosting (Code)":"",
                "Regression (Theory)":"",
                "Regression(Code)":"",
                "Clustering (Theory)":"",
                "Clustering (Code)":"",
                "Time Series Forecasting (Theory)":"",
                "Time Series Forecasting (Code)":"",
                "Predictive Analytics Quiz":"",
  },
    "ETL & Data Warehousing": {
    
         
                "Course Contents":"",
                "Introduction to ETL & Data Warehouse":"",
                "What is ETL?":"",
            " ETL Tools & Azure Data Factory Architecture":"",

                "What is Data Warehouse?":"",
                "Benefits of Data Warehousing":"",
                "Data Warehouse Structure":"",
                "Why do we need Staging environment?":"",
                "What are Data Marts?":"",
                "Data Lakes":"",
                "Data Lake vs Data Warehouse":"",
                "Elements of Data Lake":"",
                "ETL & Data Warehousing Quiz":"",
  },
    "Interview  Guides": {
 
                "Python":"", "Statistics":"", "Power BI":"", "Tableau":"", "SQL":""
  },
   "Capstone Project": {
   
    "Power BI - Live Project":"",
  "Tableau - Live Project":"",
  "Financial Dashboard":"",
" ⁠Sales Analytics":"",
"⁠Cyber Security Breaches":"",
" ⁠Telecom Analytics":"",
" ⁠HR Analytics":"",
            
  }, 
  "Final Assignment": {
 
                "This is a graded assignment, a score of 70% and above guarantees you a course completion certificate, and a score of   80% and above guarantees an internship opportunity from Zep or their partner companies":"",

  }     
}

export function TableOfContents() {
  return (
    <section
      id="table-of-contents"
      aria-labelledby="table-of-contents-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="1" id="table-of-contents-title">
         Course curriculum
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
         Here is a glimpse into your learning journey
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          This intensive program isnt just about learning tools and techniques — its about transforming you into a confident, job-ready data analyst.
        </p>
        <Expandable>
          {({ isExpanded }) => (
            <>
              <ol role="list" className="mt-16 space-y-10 sm:space-y-16">
                {Object.entries(tableOfContents)
                  .slice(0, isExpanded ? undefined : 2)
                  .map(([title, pages]) => (
                    <li key={title}>
                      <h3 className="font-display text-3xl font-bold tracking-tight text-slate-900">
                        {title}
                      </h3>
                      <ol
                        role="list"
                        className="mt-8 divide-y divide-slate-300/30 rounded-2xl bg-slate-50 px-6 py-3 text-base tracking-tight sm:px-8 sm:py-7"
                      >
                        {Object.entries(pages).map(([title, pageNumber]) => (
                          <li
                            key={title}
                            className="flex justify-between py-3"
                            aria-label={`${title} on page ${pageNumber}`}
                          >
                            <span
                              className="font-medium text-slate-900"
                              aria-hidden="true"
                            >
                              {title}
                            </span>
                            <span
                              className="font-mono text-slate-400"
                              aria-hidden="true"
                            >
                              {pageNumber}
                            </span>
                          </li>
                        ))}
                      </ol>
                    </li>
                  ))}
              </ol>
              <Expandable.Button>See more</Expandable.Button>
            </>
          )}
        </Expandable>
      </Container>
    </section>
  )
}
