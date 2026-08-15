
/* ============================= DATA ============================= */

const CATEGORIES = [
  {id:'education', ic:'🎓', en:'Education', mr:'शिक्षण', hi:'शिक्षा'},
  {id:'women', ic:'👩', en:'Women', mr:'महिला', hi:'महिला'},
  {id:'farmers', ic:'🌾', en:'Farmers', mr:'शेतकरी', hi:'किसान'},
  {id:'health', ic:'🩺', en:'Health', mr:'आरोग्य', hi:'स्वास्थ्य'},
  {id:'employment', ic:'💼', en:'Employment', mr:'रोजगार', hi:'रोजगार'},
  {id:'housing', ic:'🏠', en:'Housing', mr:'घरकुल', hi:'आवास'},
  {id:'senior', ic:'🧓', en:'Senior Citizens', mr:'ज्येष्ठ नागरिक', hi:'वरिष्ठ नागरिक'},
  {id:'financial', ic:'💰', en:'Financial Aid', mr:'आर्थिक मदत', hi:'वित्तीय सहायता'},
];


/* ============================= SCHEMES ============================= */
const SCHEMES = [
  {id:'pmkisan', name:'PM-KISAN', nameMr:'पीएम-किसान', category:'farmers', level:'Central', state:'All India',
   objective:'Income support of ₹6,000/year to landholding farmer families, paid in three instalments.',
   objectiveMr:'भूधारक शेतकरी कुटुंबांना दरवर्षी ₹6,000 उत्पन्न सहाय्य, तीन हप्त्यांत.',
   benefits:['₹6,000 per year in 3 instalments of ₹2,000','Direct bank transfer (DBT)'],
   eligibility:'Small and marginal landholding farmer families with cultivable land in their name.',
   documents:['Aadhaar Card','Land ownership records (7/12 extract)','Bank account (linked with Aadhaar)'],
   process:['Visit pmkisan.gov.in','Click "New Farmer Registration"','Enter Aadhaar and personal details','Add land and bank details','Submit and note registration number','Track status online'],
   link:'https://pmkisan.gov.in', updated:'2026-06-01',
   crit:{ageMin:18,ageMax:100,incomeMax:1000000,occ:['farmer'],gender:'any'}},

  {id:'mahadbt-scholar', name:'MahaDBT Post-Matric Scholarship', nameMr:'महाडीबीटी पोस्ट-मॅट्रिक शिष्यवृत्ती', category:'education', level:'Maharashtra', state:'Maharashtra',
   objective:'Tuition fee and maintenance allowance for SC/ST/OBC/EBC/minority students pursuing post-matric education in Maharashtra.',
   objectiveMr:'महाराष्ट्रातील SC/ST/OBC/EBC/अल्पसंख्याक विद्यार्थ्यांसाठी शिक्षण शुल्क व निर्वाह भत्ता.',
   benefits:['Full/partial tuition fee reimbursement','Maintenance allowance','Exam fee reimbursement'],
   eligibility:'Maharashtra domicile, family income under prescribed limit, enrolled in post-matric course (11th onwards).',
   documents:['Aadhaar Card','Caste certificate','Income certificate','Domicile certificate','Previous year mark sheet','Bank passbook','College bonafide certificate'],
   process:['Register on mahadbt.maharashtra.gov.in','Complete profile & upload documents','Select scheme and apply','College verifies application','Track status on dashboard'],
   link:'https://mahadbt.maharashtra.gov.in', updated:'2026-05-20',
   crit:{ageMin:15,ageMax:30,incomeMax:800000,occ:['student'],gender:'any'}},

  {id:'ujjwala', name:'Pradhan Mantri Ujjwala Yojana', nameMr:'प्रधानमंत्री उज्ज्वला योजना', category:'women', level:'Central', state:'All India',
   objective:'Free LPG gas connection to women from BPL households to replace unsafe cooking fuels.',
   objectiveMr:'BPL कुटुंबातील महिलांना मोफत एलपीजी गॅस जोडणी.',
   benefits:['Free LPG connection','First refill and stove support in many states'],
   eligibility:'Adult woman from a BPL household, not already owning an LPG connection.',
   documents:['Aadhaar Card','BPL ration card','Bank account details','Passport-size photo'],
   process:['Visit nearest LPG distributor or ujjwalayojana.gov.in','Fill application form','Submit KYC and BPL proof','Connection issued after verification'],
   link:'https://www.pmuy.gov.in', updated:'2026-04-10',
   crit:{ageMin:18,ageMax:100,incomeMax:300000,occ:['any'],gender:'female'}},

  {id:'ayushman', name:'Ayushman Bharat (PM-JAY)', nameMr:'आयुष्मान भारत (पीएम-जय)', category:'health', level:'Central', state:'All India',
   objective:'Health insurance cover of ₹5 lakh per family per year for secondary and tertiary hospitalisation.',
   objectiveMr:'दुय्यम व तृतीयक रुग्णालयीन उपचारांसाठी प्रति कुटुंब वार्षिक ₹5 लाख आरोग्य विमा संरक्षण.',
   benefits:['₹5,00,000 cover per family per year','Cashless treatment at empanelled hospitals'],
   eligibility:'Families identified under SECC deprivation criteria / listed in the beneficiary database.',
   documents:['Aadhaar Card','Ration card','Ayushman card (if already issued)'],
   process:['Check eligibility on pmjay.gov.in or via CSC','Visit nearest empanelled hospital or CSC','Get e-KYC done','Ayushman card generated','Use card for cashless treatment'],
   link:'https://pmjay.gov.in', updated:'2026-03-15',
   crit:{ageMin:0,ageMax:100,incomeMax:250000,occ:['any'],gender:'any'}},

  {id:'mudra', name:'Pradhan Mantri MUDRA Yojana', nameMr:'प्रधानमंत्री मुद्रा योजना', category:'employment', level:'Central', state:'All India',
   objective:'Collateral-free loans up to ₹10 lakh for micro and small business enterprises.',
   objectiveMr:'सूक्ष्म व लघु उद्योगांसाठी ₹10 लाखांपर्यंत तारणमुक्त कर्ज.',
   benefits:['Loans under Shishu (up to ₹50,000), Kishor (up to ₹5 lakh), Tarun (up to ₹10 lakh)','No collateral required'],
   eligibility:'Any Indian citizen with a viable business plan for a non-farm income generating activity.',
   documents:['Aadhaar Card','PAN Card','Business plan/proposal','Bank statements','Address proof'],
   process:['Approach a bank/NBFC/MFI or apply on udyamimitra.in','Submit business plan and documents','Loan sanctioned as per category','Disbursement via MUDRA card/account'],
   link:'https://www.mudra.org.in', updated:'2026-02-01',
   crit:{ageMin:18,ageMax:65,incomeMax:1000000,occ:['self-employed','unemployed'],gender:'any'}},

  {id:'pmay', name:'Pradhan Mantri Awas Yojana', nameMr:'प्रधानमंत्री आवास योजना', category:'housing', level:'Central', state:'All India',
   objective:'Financial assistance and interest subsidy for construction/purchase of a pucca house.',
   objectiveMr:'पक्के घर बांधणी/खरेदीसाठी आर्थिक सहाय्य व व्याज अनुदान.',
   benefits:['Interest subsidy on home loans','Direct assistance for house construction (rural component)'],
   eligibility:'Households without a pucca house, income criteria vary by EWS/LIG/MIG category.',
   documents:['Aadhaar Card','Income certificate','Land/property documents','Bank account details'],
   process:['Apply at pmaymis.gov.in (urban) or pmayg.nic.in (rural)','Fill beneficiary details','Upload documents','Track sanction and instalments online'],
   link:'https://pmaymis.gov.in', updated:'2026-01-25',
   crit:{ageMin:18,ageMax:100,incomeMax:1800000,occ:['any'],gender:'any'}},

  {id:'sjym', name:'Shravan Bal Seva Rajya Nivrutti Vetan Yojana', nameMr:'श्रावणबाळ सेवा राज्य निवृत्तीवेतन योजना', category:'senior', level:'Maharashtra', state:'Maharashtra',
   objective:'Monthly pension for elderly citizens of Maharashtra from economically weaker sections.',
   objectiveMr:'महाराष्ट्रातील आर्थिकदृष्ट्या दुर्बल ज्येष्ठ नागरिकांना मासिक निवृत्तीवेतन.',
   benefits:['₹600–₹1,000 monthly pension (varies by category)'],
   eligibility:'Age 65+, Maharashtra domicile, family income below prescribed limit.',
   documents:['Aadhaar Card','Age proof','Domicile certificate','Income certificate','Bank passbook'],
   process:['Apply at nearest Tehsil/Taluka office or aaplesarkar.mahaonline.gov.in','Submit documents for verification','Pension sanctioned and credited monthly'],
   link:'https://aaplesarkar.mahaonline.gov.in', updated:'2026-05-05',
   crit:{ageMin:65,ageMax:120,incomeMax:210000,occ:['any'],gender:'any'}},

  {id:'beti', name:'Beti Bachao Beti Padhao / Sukanya Samriddhi', nameMr:'सुकन्या समृद्धी योजना', category:'women', level:'Central', state:'All India',
   objective:'Savings scheme for the girl child offering high interest returns for education and marriage expenses.',
   objectiveMr:'मुलीच्या शिक्षण व विवाहासाठी उच्च व्याजदराची बचत योजना.',
   benefits:['High fixed interest rate (compounded annually)','Tax benefits under 80C'],
   eligibility:'Girl child below 10 years, account opened by parent/legal guardian.',
   documents:['Girl child birth certificate','Aadhaar of guardian','Address proof'],
   process:['Visit any post office or authorised bank','Fill Sukanya Samriddhi account opening form','Deposit minimum ₹250 to open','Continue annual deposits till maturity'],
   link:'https://www.india.gov.in/sukanya-samriddhi-yojana', updated:'2026-04-18',
   crit:{ageMin:16,ageMax:22,incomeMax:450000,occ:['student'],gender:'any'}},

  {id:'nsap', name:'National Social Assistance Programme', nameMr:'राष्ट्रीय सामाजिक सहाय्य कार्यक्रम', category:'financial', level:'Central', state:'All India',
   objective:'Financial assistance to elderly, widows and persons with disabilities living below poverty line.',
   objectiveMr:'दारिद्र्यरेषेखालील ज्येष्ठ, विधवा व दिव्यांग व्यक्तींना आर्थिक सहाय्य.',
   benefits:['Monthly pension ranging ₹200–₹500 (state top-ups may apply)'],
   eligibility:'BPL household; elderly (60+), widow, or person with disability.',
   documents:['Aadhaar Card','BPL certificate','Age/disability/widow proof','Bank passbook'],
   process:['Apply at Gram Panchayat/Municipal office or nsap.nic.in','Submit eligibility documents','Verification by local body','Pension credited monthly'],
   link:'https://nsap.nic.in', updated:'2026-03-28',
   crit:{ageMin:18,ageMax:120,incomeMax:200000,occ:['any'],gender:'any'}},

  {id:'stand-up', name:'Stand-Up India', nameMr:'स्टँड-अप इंडिया', category:'employment', level:'Central', state:'All India',
   objective:'Bank loans between ₹10 lakh–₹1 crore for SC/ST and women entrepreneurs to set up greenfield enterprises.',
   objectiveMr:'SC/ST व महिला उद्योजकांसाठी ₹10 लाख ते ₹1 कोटीपर्यंत बँक कर्ज.',
   benefits:['Loan of ₹10 lakh to ₹1 crore','Composite loan for term loan + working capital'],
   eligibility:'SC/ST and/or woman entrepreneur, above 18 years, for a greenfield (first-time) venture.',
   documents:['Aadhaar & PAN','Caste certificate (if applicable)','Business project report','Address proof'],
   process:['Apply via standupmitra.in or nearest bank branch','Submit project report and KYC','Bank appraisal','Loan sanction and disbursement'],
   link:'https://www.standupmitra.in', updated:'2026-02-14',
   crit:{ageMin:18,ageMax:65,incomeMax:100000000,occ:['self-employed','unemployed'],gender:'any'}},

  {id:'matru', name:'Pradhan Mantri Matru Vandana Yojana', nameMr:'प्रधानमंत्री मातृ वंदना योजना', category:'women', level:'Central', state:'All India',
   objective:'Cash incentive to pregnant and lactating mothers for the first living child, to compensate for wage loss.',
   objectiveMr:'पहिल्या अपत्यासाठी गरोदर व स्तनदा मातांना रोख प्रोत्साहन.',
   benefits:['₹5,000 in three instalments for the first child'],
   eligibility:'Pregnant/lactating woman for her first living child (with some exceptions).',
   documents:['Aadhaar Card','MCP card (Mother and Child Protection card)','Bank account details'],
   process:['Register at nearest Anganwadi Centre / Health facility','Fill Form 1-A, 1-B, 1-C at respective stages','Submit documents','Instalments credited via DBT'],
   link:'https://pmmvy.wcd.gov.in', updated:'2026-06-11',
   crit:{ageMin:18,ageMax:45,incomeMax:100000000,occ:['any'],gender:'female'}},


  {id:'nmmss', name:'National Means-cum-Merit Scholarship Scheme', nameMr:'राष्ट्रीय साधनसंपन्न-गुणवत्ता शिष्यवृत्ती योजना', category:'education', level:'Central', state:'All India',
   objective:'Scholarship to meritorious students of economically weaker sections to reduce dropout at Class 8 to 12 level.',
   objectiveMr:'आर्थिकदृष्ट्या दुर्बल घटकातील गुणवंत विद्यार्थ्यांना शिष्यवृत्ती, जेणेकरून शाळा सोडण्याचे प्रमाण कमी होईल.',
   benefits:['₹12,000 per year (₹1,000/month) from Class 9 to 12'],
   eligibility:'Students who passed Class 7 with at least 55% marks, family income below ₹3.5 lakh/year, studying in government/aided/local body schools.',
   documents:['Aadhaar Card','Class 7 mark sheet','Income certificate','Bank passbook (Aadhaar-linked)','School bonafide certificate'],
   process:['State conducts NMMS selection test (usually in Nov)','Qualify the test based on state merit list','Register on National Scholarship Portal (scholarships.gov.in)','Fill application and upload documents','School/District verification','Amount credited via DBT'],
   link:'https://scholarships.gov.in', updated:'2026-05-12',
   crit:{ageMin:13,ageMax:17,incomeMax:350000,occ:['student'],gender:'any'}},

  {id:'prematric-sc', name:'Pre-Matric Scholarship for SC Students', nameMr:'अनुसूचित जाती विद्यार्थ्यांसाठी पूर्व-मॅट्रिक शिष्यवृत्ती', category:'education', level:'Central', state:'All India',
   objective:'Financial assistance to SC students studying in Class 9 and 10 to reduce dropout rate before matriculation.',
   objectiveMr:'इयत्ता 9वी व 10वीत शिकणाऱ्या अनुसूचित जाती विद्यार्थ्यांना आर्थिक सहाय्य.',
   benefits:['Admission fee, tuition fee reimbursement','Maintenance allowance (day scholar/hosteller rates differ)'],
   eligibility:'SC student studying in Class 9 or 10, family income below prescribed limit.',
   documents:['Aadhaar Card','Caste certificate','Income certificate','Previous year mark sheet','Bank passbook'],
   process:['Register on National Scholarship Portal (scholarships.gov.in)','Fill personal, academic and bank details','Upload caste and income certificates','Institute verification','State verification and disbursement via DBT'],
   link:'https://scholarships.gov.in', updated:'2026-04-22',
   crit:{ageMin:13,ageMax:17,incomeMax:250000,occ:['student'],gender:'any'}},

  {id:'yasasvi', name:'PM YASASVI (Young Achievers Scholarship)', nameMr:'पीएम यशस्वी शिष्यवृत्ती', category:'education', level:'Central', state:'All India',
   objective:'Scholarship for meritorious students from OBC, EBC and DNT categories to pursue Class 9-12 and higher education.',
   objectiveMr:'OBC, EBC व भटक्या-विमुक्त जमातीतील गुणवंत विद्यार्थ्यांना इयत्ता 9वी ते 12वी व उच्च शिक्षणासाठी शिष्यवृत्ती.',
   benefits:['₹75,000 to ₹1,25,000 per year depending on class/stage'],
   eligibility:'OBC/EBC/DNT student clearing the YASASVI entrance test, family income below ₹2.5 lakh/year.',
   documents:['Aadhaar Card','Caste certificate','Income certificate','Previous class mark sheet'],
   process:['Register for YASASVI Entrance Test (YET) on National Testing Agency site','Appear for and clear the test','Apply on National Scholarship Portal with test result','Upload documents','Verification and DBT disbursement'],
   link:'https://yet.nta.ac.in', updated:'2026-03-30',
   crit:{ageMin:13,ageMax:22,incomeMax:250000,occ:['student'],gender:'any'}},

  {id:'vidyalaxmi', name:'PM Vidyalaxmi (Education Loan Scheme)', nameMr:'पीएम विद्यालक्ष्मी शैक्षणिक कर्ज योजना', category:'education', level:'Central', state:'All India',
   objective:'Collateral-free education loans with interest subvention for students admitted to top-ranked higher education institutions.',
   objectiveMr:'उच्च दर्जाच्या शैक्षणिक संस्थांमध्ये प्रवेश मिळालेल्या विद्यार्थ्यांना तारणमुक्त शैक्षणिक कर्ज व व्याज सवलत.',
   benefits:['Loans up to ₹10 lakh without collateral','3% interest subvention for family income up to ₹8 lakh/year'],
   eligibility:'Student admitted to a Quality Higher Education Institution (QHEI) listed under the scheme.',
   documents:['Aadhaar Card','Admission letter','Fee structure','Income certificate','Co-applicant (parent) KYC documents'],
   process:['Register on the PM Vidyalaxmi portal','Fill loan application with admission and institute details','Select participating bank','Submit documents for verification','Loan sanctioned and disbursed directly to institute'],
   link:'https://www.vidyalakshmi.co.in', updated:'2026-06-18',
   crit:{ageMin:17,ageMax:35,incomeMax:800000,occ:['student'],gender:'any'}},

  {id:'cbse-udaan', name:'CBSE Udaan Scheme', nameMr:'सीबीएसई उड़ान योजना', category:'education', level:'Central', state:'All India',
   objective:'Free online resources and mentoring for girl students of Class 11-12 to address low enrolment of girls in engineering colleges.',
   objectiveMr:'अभियांत्रिकी महाविद्यालयांतील मुलींच्या कमी नोंदणीचे प्रमाण सुधारण्यासाठी इयत्ता 11वी-12वीच्या मुलींसाठी मोफत ऑनलाइन शिक्षण साहित्य व मार्गदर्शन.',
   benefits:['Free e-learning content for Science stream','Online mentoring sessions','Free study material aligned to JEE/engineering entrance syllabus'],
   eligibility:'Girl student studying Science stream in Class 11 or 12 in a CBSE-affiliated school.',
   documents:['School ID/bonafide certificate','Aadhaar Card'],
   process:['School nominates eligible girl students','Register on the CBSE Udaan portal','Access free study material and recorded sessions','Attend periodic online mentoring webinars'],
   link:'https://cbseacademic.nic.in/udaan.html', updated:'2026-02-08',
   crit:{ageMin:15,ageMax:18,incomeMax:100000000,occ:['student'],gender:'female'}},

  {id:'shahu-fee', name:'Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulk Shishyavrutti', nameMr:'राजर्षी छत्रपती शाहू महाराज शिक्षण शुल्क शिष्यवृत्ती योजना', category:'education', level:'Maharashtra', state:'Maharashtra',
   objective:'Tuition and examination fee reimbursement for economically weaker section students pursuing professional courses in Maharashtra.',
   objectiveMr:'महाराष्ट्रातील आर्थिकदृष्ट्या दुर्बल घटकातील विद्यार्थ्यांना व्यावसायिक अभ्यासक्रमांसाठी शिक्षण शुल्क व परीक्षा शुल्क प्रतिपूर्ती.',
   benefits:['100% tuition fee reimbursement for family income up to ₹8 lakh (EWS category)'],
   eligibility:'Maharashtra domicile, EWS/open category, admitted to a professional course through CAP, family income within prescribed limit.',
   documents:['Aadhaar Card','Income certificate','Domicile certificate','Admission/CAP allotment letter','Caste certificate (if applicable)'],
   process:['Apply through MahaDBT portal','Fill scholarship application under EWS category','Upload income and domicile proof','College verification','State approval and DBT disbursement'],
   link:'https://mahadbt.maharashtra.gov.in', updated:'2026-05-30',
   crit:{ageMin:17,ageMax:28,incomeMax:800000,occ:['student'],gender:'any'}},

  {id:'ladki-bahin', name:"Mukhyamantri Majhi Ladki Bahin Yojana", nameMr:'मुख्यमंत्री माझी लाडकी बहीण योजना', category:'women', level:'Maharashtra', state:'Maharashtra',
   objective:'Monthly financial assistance to eligible women in Maharashtra to promote their economic independence and health.',
   objectiveMr:'महाराष्ट्रातील पात्र महिलांना आर्थिक स्वावलंबन व आरोग्यासाठी मासिक आर्थिक सहाय्य.',
   benefits:['₹1,500 per month directly credited to bank account'],
   eligibility:'Maharashtra domicile woman aged 21-65, family income below ₹2.5 lakh/year, not availing similar government benefit.',
   documents:['Aadhaar Card','Domicile certificate/residence proof','Income certificate','Bank passbook (Aadhaar-linked)','Passport-size photo'],
   process:['Apply online via nari-shakti-doot app or offline at Anganwadi/Setu Kendra','Fill application with personal and bank details','Upload documents','Verification by Anganwadi worker/officials','Monthly amount credited via DBT'],
   link:'https://ladakibahin.maharashtra.gov.in', updated:'2026-07-10',
   crit:{ageMin:21,ageMax:65,incomeMax:250000,occ:['any'],gender:'female'}},

  {id:'working-women-hostel', name:'Working Women Hostel Scheme', nameMr:'कामकाजी महिला वसतिगृह योजना', category:'women', level:'Central', state:'All India',
   objective:'Safe and affordable hostel accommodation for working women, including those with children, in cities/towns away from their hometown.',
   objectiveMr:'नोकरीसाठी घरापासून दूर राहणाऱ्या कामकाजी महिलांना (मुलांसह) सुरक्षित व परवडणारे वसतिगृह.',
   benefits:['Subsidised hostel accommodation','Day-care facility for children in many hostels'],
   eligibility:'Working woman (including trainees) with monthly income within the ceiling fixed for the city category.',
   documents:['Aadhaar Card','Employment/salary proof','Passport-size photo','Address proof'],
   process:['Locate a Working Women Hostel run by an approved organisation via wcd.nic.in','Contact the hostel/implementing organisation directly','Submit employment proof and application form','Allotment subject to availability'],
   link:'https://wcd.nic.in', updated:'2026-01-20',
   crit:{ageMin:18,ageMax:55,incomeMax:600000,occ:['employed'],gender:'female'}},

  {id:'one-stop-centre', name:'One Stop Centre Scheme (Sakhi)', nameMr:'वन स्टॉप सेंटर योजना (सखी)', category:'women', level:'Central', state:'All India',
   objective:'Integrated support (medical, legal, police, psychological, shelter) for women affected by violence, under one roof.',
   objectiveMr:'हिंसाचारग्रस्त महिलांना वैद्यकीय, कायदेशीर, पोलीस, मानसशास्त्रीय व निवारा मदत एकाच ठिकाणी.',
   benefits:['Free medical aid, police assistance, legal counselling, psychological support, temporary shelter (up to 5 days)'],
   eligibility:'Any woman affected by violence, regardless of age, class, caste, or religion — no income criteria.',
   documents:['None mandatory to access help; Aadhaar helps but is not compulsory'],
   process:['Visit or call the nearest One Stop Centre (Sakhi Kendra)','Or call Women Helpline 181 for immediate connection','Receive integrated support at the centre','Follow-up support arranged as needed'],
   link:'https://wcd.nic.in/schemes/one-stop-centre-scheme-1', updated:'2026-02-14',
   crit:{ageMin:0,ageMax:120,incomeMax:100000000,occ:['any'],gender:'female'}},

  {id:'mahila-e-haat', name:'Mahila E-Haat', nameMr:'महिला ई-हाट', category:'women', level:'Central', state:'All India',
   objective:'Online marketing platform for women entrepreneurs and self-help groups to showcase and sell their products directly.',
   objectiveMr:'महिला उद्योजक व बचत गटांना त्यांची उत्पादने थेट विकण्यासाठी ऑनलाइन विक्री व्यासपीठ.',
   benefits:['Free online listing of products/services','Direct access to buyers without middlemen'],
   eligibility:'Any woman entrepreneur or women-run self-help group/NGO with a product or service to sell.',
   documents:['Aadhaar Card','Bank account details','Product photos and details'],
   process:['Register on the Mahila E-Haat portal','Create seller profile','Upload product listings with images and price','Manage orders and buyer queries directly through the platform'],
   link:'https://mahilaehaat-rmk.gov.in', updated:'2026-03-05',
   crit:{ageMin:18,ageMax:65,incomeMax:100000000,occ:['self-employed'],gender:'female'}},

  {id:'rajmata-jijau', name:'Rajmata Jijau Mother-Child Health and Nutrition Mission', nameMr:'राजमाता जिजाऊ माता-बाल आरोग्य व पोषण अभियान', category:'health', level:'Maharashtra', state:'Maharashtra',
   objective:'Reduce maternal and infant mortality and malnutrition among mothers and children in Maharashtra through nutrition and healthcare support.',
   objectiveMr:'महाराष्ट्रातील माता व बालकांमधील कुपोषण आणि माता-बाल मृत्युदर कमी करण्यासाठी पोषण व आरोग्य सहाय्य.',
   benefits:['Supplementary nutrition for pregnant/lactating women and children','Regular health check-ups and counselling'],
   eligibility:'Pregnant and lactating women and children up to 6 years, registered with an Anganwadi Centre in Maharashtra.',
   documents:['Aadhaar Card','MCP card','Anganwadi registration'],
   process:['Register at the nearest Anganwadi Centre','Attend scheduled health and nutrition check-ups','Receive supplementary nutrition and counselling as advised'],
   link:'https://womenchild.maharashtra.gov.in', updated:'2026-04-01',
   crit:{ageMin:0,ageMax:45,incomeMax:100000000,occ:['any'],gender:'female'}},

  {id:'pmfby', name:'Pradhan Mantri Fasal Bima Yojana', nameMr:'प्रधानमंत्री फसल विमा योजना', category:'farmers', level:'Central', state:'All India',
   objective:'Crop insurance providing financial support to farmers in case of crop failure due to natural calamities, pests or disease.',
   objectiveMr:'नैसर्गिक आपत्ती, कीड किंवा रोगामुळे पीक नुकसान झाल्यास शेतकऱ्यांना आर्थिक सहाय्य देणारी पीक विमा योजना.',
   benefits:['Low premium: 2% for Kharif, 1.5% for Rabi, 5% for commercial/horticulture crops','Full insured sum on crop loss'],
   eligibility:'All farmers, including sharecroppers and tenant farmers, growing notified crops in notified areas.',
   documents:['Aadhaar Card','Land records/tenancy agreement','Bank account details','Sowing certificate'],
   process:['Apply via pmfby.gov.in, through a bank if you have a crop loan, or via CSC','Select crop and area','Pay the farmer share of premium','Insurance company assesses and settles claims on loss'],
   link:'https://pmfby.gov.in', updated:'2026-06-25',
   crit:{ageMin:18,ageMax:100,incomeMax:100000000,occ:['farmer'],gender:'any'}},

  {id:'kcc', name:'Kisan Credit Card', nameMr:'किसान क्रेडिट कार्ड', category:'farmers', level:'Central', state:'All India',
   objective:'Provide timely and adequate short-term credit to farmers for cultivation and other needs at low interest rates.',
   objectiveMr:'शेतकऱ्यांना शेती व इतर गरजांसाठी वेळेवर व पुरेसे अल्पमुदतीचे कर्ज कमी व्याजदरात उपलब्ध करून देणे.',
   benefits:['Credit up to ₹3 lakh at 4% effective interest (with timely repayment subsidy)','Flexible withdrawal like a bank account'],
   eligibility:'Farmers (owner cultivators, tenant farmers, sharecroppers, SHGs) engaged in agriculture, animal husbandry or fisheries.',
   documents:['Aadhaar Card','Land ownership/tenancy documents','Passport-size photo','Bank account details'],
   process:['Apply at nearest bank branch or via PM-KISAN portal (auto-fill for PM-KISAN beneficiaries)','Submit land and identity documents','Bank assesses and sanctions credit limit','KCC issued for cash withdrawal/purchases'],
   link:'https://www.myscheme.gov.in/schemes/kcc', updated:'2026-05-15',
   crit:{ageMin:18,ageMax:75,incomeMax:100000000,occ:['farmer'],gender:'any'}},

  {id:'soil-health', name:'Soil Health Card Scheme', nameMr:'मृदा आरोग्य पत्रिका योजना', category:'farmers', level:'Central', state:'All India',
   objective:'Provide farmers with soil nutrient status and recommended dosage of fertilisers to improve productivity.',
   objectiveMr:'शेतकऱ्यांना जमिनीतील पोषक तत्वांची स्थिती व शिफारस केलेली खत मात्रा देऊन उत्पादकता वाढवणे.',
   benefits:['Free soil testing every 2 years','Customised fertiliser recommendations'],
   eligibility:'All farmers with agricultural land are eligible; no income restriction.',
   documents:['Aadhaar Card','Land record (7/12 extract)'],
   process:['Contact local Krishi Vigyan Kendra or Agriculture Department office','Submit soil sample as per guidelines','Sample tested at soil testing lab','Soil Health Card issued with nutrient recommendations'],
   link:'https://soilhealth.dac.gov.in', updated:'2026-03-19',
   crit:{ageMin:18,ageMax:100,incomeMax:100000000,occ:['farmer'],gender:'any'}},

  {id:'pmksy', name:'PM Krishi Sinchayee Yojana', nameMr:'पंतप्रधान कृषी सिंचन योजना', category:'farmers', level:'Central', state:'All India',
   objective:'Expand irrigated area, improve water use efficiency and promote precision irrigation (drip/sprinkler) among farmers.',
   objectiveMr:'सिंचन क्षेत्र वाढवणे, पाण्याचा कार्यक्षम वापर व ठिबक/तुषार सिंचनाला प्रोत्साहन.',
   benefits:['Subsidy of 55%-80% on drip/sprinkler irrigation equipment depending on category'],
   eligibility:'Farmers with assured water source wanting to adopt micro-irrigation on their land.',
   documents:['Aadhaar Card','Land records','Water source proof','Bank account details'],
   process:['Apply through state Agriculture/Horticulture Department portal','Submit land and water source documents','Field verification by department officials','Subsidy credited after installation of approved equipment'],
   link:'https://pmksy.gov.in', updated:'2026-02-27',
   crit:{ageMin:18,ageMax:100,incomeMax:100000000,occ:['farmer'],gender:'any'}},

  {id:'pmkmy', name:'PM Kisan Maandhan Yojana', nameMr:'पंतप्रधान किसान मानधन योजना', category:'farmers', level:'Central', state:'All India',
   objective:'Voluntary pension scheme for small and marginal farmers to provide social security after age 60.',
   objectiveMr:'लहान व अल्पभूधारक शेतकऱ्यांना वयाच्या 60 नंतर सामाजिक सुरक्षेसाठी ऐच्छिक पेन्शन योजना.',
   benefits:['₹3,000 monthly pension after age 60','Government matches farmer\'s monthly contribution equally'],
   eligibility:'Small/marginal farmer aged 18-40 with landholding up to 2 hectares, not covered under other pension schemes.',
   documents:['Aadhaar Card','Land records','Bank passbook','Age proof'],
   process:['Visit nearest Common Service Centre (CSC) or apply online at maandhan.in','Fill enrolment form with age and land details','Start monthly contribution (₹55-₹200 based on entry age)','Pension begins automatically at age 60'],
   link:'https://maandhan.in', updated:'2026-01-11',
   crit:{ageMin:18,ageMax:40,incomeMax:100000000,occ:['farmer'],gender:'any'}},

  {id:'enam', name:'e-NAM (National Agriculture Market)', nameMr:'ई-नाम (राष्ट्रीय कृषी बाजार)', category:'farmers', level:'Central', state:'All India',
   objective:'Online trading platform connecting existing mandis to enable farmers to get better price discovery for produce.',
   objectiveMr:'शेतकऱ्यांना पिकांसाठी चांगला भाव मिळावा यासाठी विद्यमान बाजार समित्यांना जोडणारे ऑनलाइन व्यापार व्यासपीठ.',
   benefits:['Online price discovery across mandis','Reduced dependency on local middlemen'],
   eligibility:'Any farmer wishing to sell produce through a participating APMC mandi.',
   documents:['Aadhaar Card','Bank account details','Farmer registration at local APMC'],
   process:['Register at your nearest e-NAM enabled APMC mandi','Get KYC done and account linked','Bring produce for quality assay at the mandi','Bid and payment processed through the e-NAM platform'],
   link:'https://www.enam.gov.in', updated:'2026-04-08',
   crit:{ageMin:18,ageMax:100,incomeMax:100000000,occ:['farmer'],gender:'any'}},

  {id:'jsy', name:'Janani Suraksha Yojana', nameMr:'जननी सुरक्षा योजना', category:'health', level:'Central', state:'All India',
   objective:'Reduce maternal and neonatal mortality by promoting institutional delivery among poor pregnant women.',
   objectiveMr:'गरीब गरोदर महिलांमध्ये संस्थात्मक प्रसूतीला प्रोत्साहन देऊन माता व नवजात मृत्युदर कमी करणे.',
   benefits:['Cash assistance for institutional delivery (amount varies by rural/urban and state)'],
   eligibility:'Pregnant women from BPL households, especially in low-performing states; all SC/ST women regardless of income in some states.',
   documents:['Aadhaar Card','MCP card','BPL card (if applicable)','Bank account details'],
   process:['Register pregnancy at nearest Anganwadi/health facility','Avail antenatal check-ups at government facility','Deliver at an accredited government/empanelled institution','Cash assistance disbursed post-delivery'],
   link:'https://nhm.gov.in/index1.php?lang=1&level=3&sublinkid=841', updated:'2026-05-03
];


/* ============================= SERVICES ============================= */
const SERVICES = [
  {id:'aadhaar', ic:'🪪', name:'Aadhaar Card', nameMr:'आधार कार्ड',
   desc:'Unique 12-digit identity number for Indian residents.',
   portal:'uidai.gov.in', portalLink:'https://uidai.gov.in',
   registration:'No login needed for new enrolment (visit enrolment centre); portal login (via OTP) needed for updates/downloads.',
   documents:['Proof of Identity (PAN/Passport/Voter ID)','Proof of Address (utility bill/bank statement)','Proof of Date of Birth','Passport-size photo'],
   steps:['Locate nearest Aadhaar Enrolment Centre on uidai.gov.in','Book an appointment (optional but recommended)','Carry original + photocopy of ID and address proof','Biometrics (fingerprints, iris, photo) captured at centre','Note the enrolment ID/acknowledgement slip','Aadhaar generated in 15–90 days; download e-Aadhaar online using enrolment ID or Aadhaar number + OTP'],
   statusCheck:'Use "Check Aadhaar Status" on uidai.gov.in with your enrolment ID/EID.',
   problems:['Address proof name mismatch — carry a supporting document with matching name','OTP not received — ensure mobile number is registered/updated first','Biometric mismatch for update — visit centre again with correct documents']},

  {id:'pan', ic:'💳', name:'PAN Card', nameMr:'पॅन कार्ड',
   desc:'Permanent Account Number for tax and financial transactions.',
   portal:'incometax.gov.in / NSDL-Protean / UTIITSL', portalLink:'https://www.incometax.gov.in',
   registration:'Apply online via Protean (NSDL) or UTIITSL portal using Aadhaar e-KYC — no separate account needed for first application.',
   documents:['Aadhaar Card','Proof of Address','Passport-size photo','Proof of Date of Birth'],
   steps:['Go to Protean (tin-nsdl / protean-tinpan.com) or UTIITSL website','Select "New PAN – Indian Citizen (Form 49A)"','Fill personal details and upload documents','Complete e-KYC using Aadhaar OTP','Pay the applicable fee online','Download e-PAN once processed (physical card by post if opted)'],
   statusCheck:'Track using the 15-digit acknowledgement number on the same portal under "Track PAN status".',
   problems:['Aadhaar-PAN name mismatch — correct Aadhaar details first via UIDAI','Photo/signature upload rejected — check file size/format requirements','Payment successful but status not updated — wait 24 hrs before re-checking']},

  {id:'digilocker', ic:'📁', name:'DigiLocker', nameMr:'डिजिलॉकर',
   desc:'Cloud storage for verified government documents (linked to Aadhaar).',
   portal:'digilocker.gov.in', portalLink:'https://www.digilocker.gov.in',
   registration:'Sign up with mobile number (Aadhaar-linked OTP) or email; set a 6-digit security PIN.',
   documents:['Aadhaar-linked mobile number','Aadhaar number (for e-KYC linking)'],
   steps:['Visit digilocker.gov.in or install the app','Sign up using mobile number and OTP','Set username and security PIN','Link Aadhaar for auto-fetching documents','Go to "Issued Documents" and search by department (e.g. transport, education)','Documents fetched appear as verified e-documents, usable anywhere physical copies are needed'],
   statusCheck:'All linked/issued documents are visible instantly under "Issued Documents" in your account.',
   problems:['Document not found under issuer — not all states/boards have onboarded every document type yet','OTP delay — retry after a few minutes or check mobile network','Account locked — use "Forgot Security PIN" with Aadhaar OTP to reset']},

  {id:'mahadbt', ic:'🎯', name:'MahaDBT Portal', nameMr:'महाडीबीटी पोर्टल',
   desc:'Single portal for Maharashtra Government scholarships and benefit schemes.',
   portal:'mahadbt.maharashtra.gov.in', portalLink:'https://mahadbt.maharashtra.gov.in',
   registration:'Create an account with mobile number and email; complete Aadhaar e-KYC before applying to any scheme.',
   documents:['Aadhaar Card','Caste/Income/Domicile certificates (scheme-dependent)','Bank passbook','Educational documents (for scholarships)'],
   steps:['Register on mahadbt.maharashtra.gov.in','Verify mobile/email OTP','Complete Aadhaar e-KYC','Fill your profile (personal, education, bank details)','Browse "Scholarship" or scheme list and click Apply','Upload required documents','Submit — application routes to your institute/department for verification'],
   statusCheck:'Login → "Track Application Status" on the dashboard shows stage-wise progress.',
   problems:['e-KYC failure — ensure Aadhaar mobile number is active for OTP','Institute not verifying application — follow up directly with college nodal officer','Bank account not DBT-enabled — get account NPCI-seeded at your bank branch']},

  {id:'voter', ic:'🗳️', name:'Voter ID / Voter Services', nameMr:'मतदार ओळखपत्र',
   desc:'Voter registration, corrections, and related services via the Election Commission.',
   portal:'voters.eci.gov.in', portalLink:'https://voters.eci.gov.in',
   registration:'Create an account on the Voter Services Portal (voters.eci.gov.in) or use the Voter Helpline app; mobile number required.',
   documents:['Proof of Age (birth certificate/10th marksheet)','Proof of Address','Passport-size photo','Aadhaar (optional but recommended for linking)'],
   steps:['Register on voters.eci.gov.in or Voter Helpline app','For new registration select Form 6; for correction, Form 8','Fill details and upload documents/photo','Submit — Booth Level Officer (BLO) may visit for verification','Track application using reference ID','Voter ID card dispatched or e-EPIC downloadable after approval'],
   statusCheck:'Use "Track Application Status" on voters.eci.gov.in with your reference number.',
   problems:['Name/address mismatch across documents — keep one consistent supporting document','BLO verification delay — contact local Electoral Registration Officer (ERO)','Duplicate entry rejection — check existing electoral roll before reapplying']},

  {id:'certificates', ic:'📜', name:'Income / Caste / Domicile Certificates', nameMr:'उत्पन्न / जात / अधिवास प्रमाणपत्र',
   desc:'Common certificates issued by the Revenue Department, needed for most scheme applications.',
   portal:'aaplesarkar.mahaonline.gov.in', portalLink:'https://aaplesarkar.mahaonline.gov.in',
   registration:'Register on Aaple Sarkar with mobile number; login with OTP for each new application.',
   documents:['Aadhaar Card','Ration Card','School leaving certificate (for caste/domicile)','Self-declaration/affidavit (income certificate)','Recent photo'],
   steps:['Login to aaplesarkar.mahaonline.gov.in','Select the certificate type (Income/Caste/Domicile) under Revenue Department','Fill applicant and family details','Upload supporting documents','Pay nominal fee online','Application forwarded to Tehsildar/Circle Officer for verification','Download the digitally signed certificate once approved'],
   statusCheck:'"Track Your Application" on Aaple Sarkar using the application ID.',
   problems:['Verification stuck at Tehsildar level — visit local Setu Kendra/Tehsil office for follow-up','Document unclear on upload — re-scan at higher resolution, under 1–2 MB','Certificate validity expired — most certificates need renewal every 1–3 years']},
];

/* ============================= TRANSLATIONS ============================= */
const T = {
  en:{siteName:'Nagrik Sahayak', tagline:'Find schemes. Understand portals. Apply with confidence.',
    home:'Home', schemes:'Schemes', services:'Services', findForMe:'Find For Me', compare:'Compare', dashboard:'Dashboard', faq:'FAQ',
    login:'Login', logout:'Logout', signup:'Sign Up', welcome:'Welcome',
    heroTitle:'Your guide to Government Schemes & Digital Portals',
    heroSub:'Search welfare schemes, check if you are eligible, and get step-by-step help using official government portals like Aadhaar, PAN, DigiLocker and MahaDBT.',
    searchPlaceholder:'Search schemes (e.g. scholarship, farmer, pension)…',
    categories:'Browse by Category', popularServices:'Popular Government Services', viewAll:'View all',
    viewDetails:'View Details', apply:'Apply Now', save:'Save', saved:'Saved',
    overview:'Overview', eligibility:'Eligibility', documents:'Documents', howToApply:'How to Apply', official:'Official Portal',
    lastUpdated:'Last updated', benefits:'Benefits', objective:'Objective',
    filterCategory:'Category', filterState:'State/Level', all:'All',
    findTitle:'Find Schemes for Me', findSub:'Answer a few quick questions and we will match you to relevant schemes.',
    age:'Age', gender:'Gender', male:'Male', female:'Female', other:'Other/Prefer not to say',
    stateField:'State', occupation:'Occupation', income:'Annual Family Income (₹)',
    student:'Student', farmer:'Farmer', employed:'Employed', unemployed:'Unemployed', selfEmployed:'Self-employed', seniorCitizen:'Senior Citizen',
    findBtn:'Find Schemes', results:'Schemes you may be eligible for', match:'match',
    checkStatus:'How to Check Status', commonProblems:'Common Problems', registration:'Registration / Login',
    compareTitle:'Compare Schemes', compareSub:'Select up to 3 schemes to compare side by side.', addToCompare:'Add to Compare', removeFromCompare:'Remove',
    dashTitle:'My Dashboard', savedSchemes:'Saved Schemes', myApplications:'My Applications', markApplied:'Mark as Applied',
    noSaved:'No saved schemes yet. Browse schemes and tap ♡ to save.', noApps:'No applications tracked yet.',
    status_applied:'Applied', status_review:'Under Review', status_approved:'Approved', status_rejected:'Rejected',
    faqTitle:'Frequently Asked Questions',
    faqs:[['Who can apply for these schemes?','Eligibility differs per scheme — check age, income, occupation and state criteria on each scheme\'s Eligibility tab, or use "Find Schemes for Me".'],
      ['How do I apply?','Every scheme page has a step-by-step "How to Apply" guide and an official government link. This site guides you — the actual application happens on the official portal.'],
      ['Is applying free?','Most welfare schemes have no application fee. Some certificate services (like income/caste certificates) have a small nominal fee.'],
      ['What documents are usually required?','Aadhaar Card, income/caste/domicile certificates, bank account details and educational documents are commonly needed — see each scheme\'s Documents tab.'],
      ['Where can I check my application status?','Use the official portal\'s tracking option with your application/reference number — each scheme and service page lists exactly where.']],
    disclaimer:'This is a student Community Engagement Project (CEP) built to help citizens understand and navigate government schemes and portals. It is not an official government website. Always complete actual applications on the official portal linked on each page.',
    home_apply:'Apply on official site', doc_needed:'Documents needed', notLoggedIn:'You are browsing as guest.',
    email:'Email', password:'Password', name:'Full Name', createAccount:'Create Account', alreadyHave:'Already have an account? Login',
    needAccount:'New here? Sign up', matchWarn:'Some criteria may need manual verification', matchGood:'Matches your profile well',
    close:'Close', ageGroup:'Age', incomeLimit:'Income limit', level:'Level', schemeName:'Scheme',
  },
  mr:{siteName:'नागरिक सहाय्यक', tagline:'योजना शोधा. पोर्टल समजून घ्या. आत्मविश्वासाने अर्ज करा.',
    home:'मुख्यपृष्ठ', schemes:'योजना', services:'सेवा', findForMe:'माझ्यासाठी शोधा', compare:'तुलना', dashboard:'डॅशबोर्ड', faq:'प्रश्न',
    login:'लॉगिन', logout:'लॉगआऊट', signup:'नोंदणी', welcome:'स्वागत आहे',
    heroTitle:'सरकारी योजना व डिजिटल पोर्टलसाठी तुमचा मार्गदर्शक',
    heroSub:'कल्याणकारी योजना शोधा, तुम्ही पात्र आहात का ते तपासा, आणि आधार, पॅन, डिजिलॉकर व महाडीबीटी सारख्या अधिकृत पोर्टलचा वापर करण्यासाठी टप्प्याटप्प्याने मदत मिळवा.',
    searchPlaceholder:'योजना शोधा (उदा. शिष्यवृत्ती, शेतकरी, पेन्शन)…',
    categories:'प्रकारानुसार पहा', popularServices:'लोकप्रिय सरकारी सेवा', viewAll:'सर्व पहा',
    viewDetails:'तपशील पहा', apply:'आता अर्ज करा', save:'जतन करा', saved:'जतन केले',
    overview:'आढावा', eligibility:'पात्रता', documents:'कागदपत्रे', howToApply:'अर्ज कसा करावा', official:'अधिकृत पोर्टल',
    lastUpdated:'शेवटचे अद्यतन', benefits:'लाभ', objective:'उद्दिष्ट',
    filterCategory:'प्रकार', filterState:'राज्य/स्तर', all:'सर्व',
    findTitle:'माझ्यासाठी योजना शोधा', findSub:'काही प्रश्नांची उत्तरे द्या, आम्ही तुम्हाला योग्य योजना दाखवू.',
    age:'वय', gender:'लिंग', male:'पुरुष', female:'महिला', other:'इतर/सांगायचे नाही',
    stateField:'राज्य', occupation:'व्यवसाय', income:'वार्षिक कौटुंबिक उत्पन्न (₹)',
    student:'विद्यार्थी', farmer:'शेतकरी', employed:'नोकरदार', unemployed:'बेरोजगार', selfEmployed:'स्वयंरोजगार', seniorCitizen:'ज्येष्ठ नागरिक',
    findBtn:'योजना शोधा', results:'तुम्ही पात्र असू शकता अशा योजना', match:'जुळणी',
    checkStatus:'स्थिती कशी तपासावी', commonProblems:'सामान्य अडचणी', registration:'नोंदणी / लॉगिन',
    compareTitle:'योजनांची तुलना करा', compareSub:'तुलना करण्यासाठी जास्तीत जास्त ३ योजना निवडा.', addToCompare:'तुलनेसाठी जोडा', removeFromCompare:'काढा',
    dashTitle:'माझा डॅशबोर्ड', savedSchemes:'जतन केलेल्या योजना', myApplications:'माझे अर्ज', markApplied:'अर्ज केले म्हणून चिन्हांकित करा',
    noSaved:'अजून कोणतीही योजना जतन केलेली नाही. योजना पहा आणि ♡ वर टॅप करा.', noApps:'अजून कोणताही अर्ज नोंदवलेला नाही.',
    status_applied:'अर्ज केला', status_review:'पुनरावलोकनाधीन', status_approved:'मंजूर', status_rejected:'नाकारले',
    faqTitle:'वारंवार विचारले जाणारे प्रश्न',
    faqs:[['या योजनांसाठी कोण अर्ज करू शकतो?','पात्रता प्रत्येक योजनेनुसार वेगळी असते — वय, उत्पन्न, व्यवसाय व राज्य निकष प्रत्येक योजनेच्या पात्रता टॅबमध्ये पहा.'],
      ['अर्ज कसा करावा?','प्रत्येक योजना पानावर टप्प्याटप्प्याने मार्गदर्शन व अधिकृत सरकारी दुवा दिलेला आहे. प्रत्यक्ष अर्ज अधिकृत पोर्टलवरच करावा.'],
      ['अर्ज करणे मोफत आहे का?','बहुतांश कल्याणकारी योजनांसाठी अर्ज शुल्क नाही. काही प्रमाणपत्र सेवांसाठी (उत्पन्न/जात प्रमाणपत्र) नाममात्र शुल्क असते.'],
      ['सहसा कोणती कागदपत्रे लागतात?','आधार कार्ड, उत्पन्न/जात/अधिवास प्रमाणपत्र, बँक खाते तपशील व शैक्षणिक कागदपत्रे सहसा लागतात.'],
      ['अर्जाची स्थिती कुठे तपासावी?','अधिकृत पोर्टलवरील ट्रॅकिंग पर्याय वापरून तुमच्या अर्ज क्रमांकाने तपासा.']],
    disclaimer:'हा विद्यार्थी सामुदायिक सहभाग प्रकल्प (CEP) आहे, जो नागरिकांना सरकारी योजना व पोर्टल समजून घेण्यास मदत करण्यासाठी बनवला आहे. ही अधिकृत सरकारी वेबसाइट नाही. कृपया प्रत्यक्ष अर्ज अधिकृत पोर्टलवरच करा.',
    home_apply:'अधिकृत साइटवर अर्ज करा', doc_needed:'आवश्यक कागदपत्रे', notLoggedIn:'तुम्ही अतिथी म्हणून पाहत आहात.',
    email:'ईमेल', password:'पासवर्ड', name:'पूर्ण नाव', createAccount:'खाते तयार करा', alreadyHave:'आधीच खाते आहे? लॉगिन करा',
    needAccount:'नवीन आहात? नोंदणी करा', matchWarn:'काही निकष हाताने पडताळावे लागतील', matchGood:'तुमच्या प्रोफाइलशी चांगले जुळते',
    close:'बंद करा', ageGroup:'वय', incomeLimit:'उत्पन्न मर्यादा', level:'स्तर', schemeName:'योजना',
  },
  hi:{siteName:'नागरिक सहायक', tagline:'योजनाएं खोजें। पोर्टल समझें। भरोसे के साथ आवेदन करें।',
    home:'होम', schemes:'योजनाएं', services:'सेवाएं', findForMe:'मेरे लिए खोजें', compare:'तुलना करें', dashboard:'डैशबोर्ड', faq:'सवाल',
    login:'लॉगिन', logout:'लॉगआउट', signup:'साइन अप', welcome:'स्वागत है',
    heroTitle:'सरकारी योजनाओं और डिजिटल पोर्टल के लिए आपका मार्गदर्शक',
    heroSub:'कल्याणकारी योजनाएं खोजें, अपनी पात्रता जांचें, और आधार, पैन, डिजिलॉकर व महाडीबीटी जैसे पोर्टल का उपयोग करने में चरण-दर-चरण मदद पाएं।',
    searchPlaceholder:'योजनाएं खोजें (जैसे छात्रवृत्ति, किसान, पेंशन)…',
    categories:'श्रेणी अनुसार देखें', popularServices:'लोकप्रिय सरकारी सेवाएं', viewAll:'सभी देखें',
    viewDetails:'विवरण देखें', apply:'अभी आवेदन करें', save:'सहेजें', saved:'सहेजा गया',
    overview:'अवलोकन', eligibility:'पात्रता', documents:'दस्तावेज़', howToApply:'आवेदन कैसे करें', official:'आधिकारिक पोर्टल',
    lastUpdated:'अंतिम अद्यतन', benefits:'लाभ', objective:'उद्देश्य',
    filterCategory:'श्रेणी', filterState:'राज्य/स्तर', all:'सभी',
    findTitle:'मेरे लिए योजनाएं खोजें', findSub:'कुछ प्रश्नों के उत्तर दें, हम आपको उपयुक्त योजनाएं दिखाएंगे।',
    age:'आयु', gender:'लिंग', male:'पुरुष', female:'महिला', other:'अन्य/बताना नहीं चाहते',
    stateField:'राज्य', occupation:'व्यवसाय', income:'वार्षिक पारिवारिक आय (₹)',
    student:'छात्र', farmer:'किसान', employed:'नौकरीपेशा', unemployed:'बेरोजगार', selfEmployed:'स्वरोजगार', seniorCitizen:'वरिष्ठ नागरिक',
    findBtn:'योजनाएं खोजें', results:'आप इन योजनाओं के लिए पात्र हो सकते हैं', match:'मेल',
    checkStatus:'स्थिति कैसे जांचें', commonProblems:'सामान्य समस्याएं', registration:'पंजीकरण / लॉगिन',
    compareTitle:'योजनाओं की तुलना करें', compareSub:'तुलना के लिए अधिकतम 3 योजनाएं चुनें।', addToCompare:'तुलना में जोड़ें', removeFromCompare:'हटाएं',
    dashTitle:'मेरा डैशबोर्ड', savedSchemes:'सहेजी गई योजनाएं', myApplications:'मेरे आवेदन', markApplied:'आवेदित के रूप में चिह्नित करें',
    noSaved:'अभी तक कोई योजना सहेजी नहीं गई। योजनाएं देखें और ♡ पर टैप करें।', noApps:'अभी तक कोई आवेदन ट्रैक नहीं किया गया।',
    status_applied:'आवेदन किया', status_review:'समीक्षाधीन', status_approved:'स्वीकृत', status_rejected:'अस्वीकृत',
    faqTitle:'अक्सर पूछे जाने वाले प्रश्न',
    faqs:[['इन योजनाओं के लिए कौन आवेदन कर सकता है?','पात्रता हर योजना के अनुसार अलग है — आयु, आय, व्यवसाय और राज्य मानदंड हर योजना के पात्रता टैब में देखें।'],
      ['आवेदन कैसे करें?','हर योजना पेज पर चरण-दर-चरण मार्गदर्शन और आधिकारिक सरकारी लिंक दिया गया है। वास्तविक आवेदन आधिकारिक पोर्टल पर ही होता है।'],
      ['क्या आवेदन निःशुल्क है?','अधिकांश कल्याणकारी योजनाओं में कोई शुल्क नहीं है। कुछ प्रमाणपत्र सेवाओं में मामूली शुल्क होता है।'],
      ['आमतौर पर कौन से दस्तावेज़ चाहिए?','आधार कार्ड, आय/जाति/निवास प्रमाणपत्र, बैंक खाता विवरण और शैक्षणिक दस्तावेज़ आमतौर पर चाहिए।'],
      ['आवेदन की स्थिति कहां जांचें?','आधिकारिक पोर्टल के ट्रैकिंग विकल्प में अपने आवेदन नंबर से जांचें।']],
    disclaimer:'यह एक छात्र सामुदायिक सहभागिता परियोजना (CEP) है, जो नागरिकों को सरकारी योजनाएं व पोर्टल समझने में मदद के लिए बनाई गई है। यह आधिकारिक सरकारी वेबसाइट नहीं है। कृपया वास्तविक आवेदन आधिकारिक पोर्टल पर ही करें।',
    home_apply:'आधिकारिक साइट पर आवेदन करें', doc_needed:'आवश्यक दस्तावेज़', notLoggedIn:'आप अतिथि के रूप में देख रहे हैं।',
    email:'ईमेल', password:'पासवर्ड', name:'पूरा नाम', createAccount:'खाता बनाएं', alreadyHave:'पहले से खाता है? लॉगिन करें',
    needAccount:'नए हैं? साइन अप करें', matchWarn:'कुछ मानदंडों की मैन्युअल जांच आवश्यक', matchGood:'आपकी प्रोफ़ाइल से अच्छी तरह मेल खाता है',
    close:'बंद करें', ageGroup:'आयु', incomeLimit:'आय सीमा', level:'स्तर', schemeName:'योजना',
  }
};

/* ============================= STATE ============================= */
let STATE = {
  view:'home', lang:'en', schemeId:null, serviceId:null,
  filters:{cat:'', state:'', q:''},
  user:null, bookmarks:[], applications:[], compareList:[], showAuth:null, authMode:'login',
  eligForm:null, eligResults:null
};

function t(k){ return (T[STATE.lang] && T[STATE.lang][k]!==undefined) ? T[STATE.lang][k] : T.en[k]; }
function localized(obj, field){
  if(STATE.lang==='mr' && obj[field+'Mr']) return obj[field+'Mr'];
  return obj[field];
}

/* ============================= STORAGE ============================= */
async function loadAll(){
  try{ const r = await window.storage.get('lang-pref'); if(r) STATE.lang = r.value; }catch(e){}
  try{ const r = await window.storage.get('user-account'); if(r) STATE.user = JSON.parse(r.value); }catch(e){}
  try{ const r = await window.storage.get('bookmarks'); if(r) STATE.bookmarks = JSON.parse(r.value); }catch(e){}
  try{ const r = await window.storage.get('applications'); if(r) STATE.applications = JSON.parse(r.value); }catch(e){}
  render();
}
async function saveLang(){ try{ await window.storage.set('lang-pref', STATE.lang); }catch(e){} }
async function saveUser(){ try{ if(STATE.user) await window.storage.set('user-account', JSON.stringify(STATE.user)); else await window.storage.delete('user-account'); }catch(e){} }
async function saveBookmarks(){ try{ await window.storage.set('bookmarks', JSON.stringify(STATE.bookmarks)); }catch(e){} }
async function saveApplications(){ try{ await window.storage.set('applications', JSON.stringify(STATE.applications)); }catch(e){} }

/* ============================= ACTIONS ============================= */
function goto(view, extra){ STATE.view=view; if(extra) Object.assign(STATE, extra); window.scrollTo(0,0); render(); }
function setLang(l){ STATE.lang=l; saveLang(); render(); }
function toggleBookmark(id){
  const i = STATE.bookmarks.indexOf(id);
  if(i>=0) STATE.bookmarks.splice(i,1); else STATE.bookmarks.push(id);
  saveBookmarks(); render();
}
function toggleCompare(id){
  const i = STATE.compareList.indexOf(id);
  if(i>=0) STATE.compareList.splice(i,1);
  else if(STATE.compareList.length<3) STATE.compareList.push(id);
  render();
}
function markApplied(id){
  if(STATE.applications.find(a=>a.schemeId===id)) return;
  STATE.applications.push({schemeId:id, status:'applied', date:new Date().toISOString().slice(0,10)});
  saveApplications(); render();
}
function cycleStatus(id){
  const order=['applied','review','approved','rejected'];
  const a = STATE.applications.find(x=>x.schemeId===id);
  if(!a) return;
  a.status = order[(order.indexOf(a.status)+1)%order.length];
  saveApplications(); render();
}
function removeApplication(id){
  STATE.applications = STATE.applications.filter(a=>a.schemeId!==id);
  saveApplications(); render();
}
function doLogin(name,email){
  STATE.user = {name, email};
  saveUser(); STATE.showAuth=null; render();
}
function doLogout(){ STATE.user=null; saveUser(); render(); }
function runEligibility(form){
  STATE.eligForm = form;
  const results = SCHEMES.map(s=>{
    let total=0, hit=0, notes=[];
    // age
    total++; if(form.age>=s.crit.ageMin && form.age<=s.crit.ageMax){hit++;} else notes.push({ok:false,label:t('age')});
    if(form.age>=s.crit.ageMin && form.age<=s.crit.ageMax) notes.push({ok:true,label:t('age')});
    // income
    total++; if(form.income<=s.crit.incomeMax){hit++; notes.push({ok:true,label:t('income')});} else notes.push({ok:false,label:t('income')});
    // gender
    total++; if(s.crit.gender==='any' || s.crit.gender===form.gender){hit++; notes.push({ok:true,label:t('gender')});} else notes.push({ok:false,label:t('gender')});
    // occupation
    total++; if(s.crit.occ.includes('any') || s.crit.occ.includes(form.occupation)){hit++; notes.push({ok:true,label:t('occupation')});} else notes.push({ok:false,label:t('occupation')});
    const pct = Math.round((hit/total)*100);
    return {scheme:s, pct, notes};
  }).filter(r=>r.pct>=50).sort((a,b)=>b.pct-a.pct);
  STATE.eligResults = results;
  render();
}
function toggleFaq(idx){
  const el = document.getElementById('faq-'+idx);
  if(el) el.classList.toggle('open');
}

/* ============================= RENDER HELPERS ============================= */
function filteredSchemes(){
  return SCHEMES.filter(s=>{
    if(STATE.filters.cat && s.category!==STATE.filters.cat) return false;
    if(STATE.filters.state && s.state!==STATE.filters.state) return false;
    if(STATE.filters.q){
      const q = STATE.filters.q.toLowerCase();
      const hay = (s.name+' '+s.objective+' '+s.category).toLowerCase();
      if(!hay.includes(q)) return false;
    }
    return true;
  });
}
function schemeCardHTML(s){
  const fav = STATE.bookmarks.includes(s.id);
  const inCompare = STATE.compareList.includes(s.id);
  return `<div class="scheme-card">
    <button class="fav ${fav?'active':''}" onclick="toggleBookmark('${s.id}')" title="${t('save')}">${fav?'♥':'♡'}</button>
    <span class="pill cat">${CATEGORIES.find(c=>c.id===s.category)[STATE.lang]||CATEGORIES.find(c=>c.id===s.category).en}</span>
    <span class="pill state">${s.state}</span>
    <h3>${localized(s,'name')}</h3>
    <div class="obj">${localized(s,'objective')}</div>
    <div class="row">
      <label class="compare-check"><input type="checkbox" ${inCompare?'checked':''} onchange="toggleCompare('${s.id}')"> ${t('compare')}</label>
    </div>
    <div class="row">
      <button class="link-btn ghost" onclick="goto('detail',{schemeId:'${s.id}'})">${t('viewDetails')}</button>
      <button class="link-btn" onclick="window.open('${s.link}','_blank')">${t('apply')}</button>
    </div>
  </div>`;
}
function serviceCardHTML(sv){
  return `<div class="svc-card" onclick="goto('serviceDetail',{serviceId:'${sv.id}'})">
    <div class="ic">${sv.ic}</div>
    <div class="lbl">${STATE.lang==='mr'?sv.nameMr:sv.name}</div>
    <div class="desc">${sv.desc}</div>
  </div>`;
}

/* ============================= VIEWS ============================= */
function viewHome(){
  return `
  <div class="hero">
    <h1>${t('heroTitle')}</h1>
    <p>${t('heroSub')}</p>
    <div class="searchbar">
      <input id="homeSearch" placeholder="${t('searchPlaceholder')}" onkeydown="if(event.key==='Enter'){STATE.filters.q=this.value; goto('schemes');}">
      <button onclick="STATE.filters.q=document.getElementById('homeSearch').value; goto('schemes');">🔍</button>
    </div>
  </div>

  <div class="section-title"><h2>🎯 ${t('findTitle')}</h2><span class="link" onclick="goto('find')">${t('findForMe')} →</span></div>
  <div class="panel" style="cursor:pointer" onclick="goto('find')">
    <p class="muted" style="margin:0;font-size:12.5px;">${t('findSub')}</p>
  </div>

  <div class="section-title"><h2>${t('categories')}</h2></div>
  <div class="cat-grid">
    ${CATEGORIES.map(c=>`<div class="cat-card" onclick="STATE.filters={cat:'${c.id}',state:'',q:''}; goto('schemes');">
      <div class="ic">${c.ic}</div><div class="lbl">${c[STATE.lang]||c.en}</div>
    </div>`).join('')}
  </div>

  <div class="section-title"><h2>${t('popularServices')}</h2><span class="link" onclick="goto('services')">${t('viewAll')} →</span></div>
  <div class="svc-grid">${SERVICES.slice(0,6).map(serviceCardHTML).join('')}</div>

  <div class="section-title"><h2>${t('schemes')}</h2><span class="link" onclick="goto('schemes')">${t('viewAll')} →</span></div>
  <div class="card-grid">${SCHEMES.slice(0,3).map(schemeCardHTML).join('')}</div>

  <div class="disclaimer">⚠️ ${t('disclaimer')}</div>
  `;
}

function viewSchemes(){
  const list = filteredSchemes();
  const states = [...new Set(SCHEMES.map(s=>s.state))];
  return `
  <div class="back-link" onclick="goto('home')">← ${t('home')}</div>
  <h2>${t('schemes')}</h2>
  <div class="filters">
    <input placeholder="${t('searchPlaceholder')}" value="${STATE.filters.q||''}" oninput="STATE.filters.q=this.value; render();" style="flex:2;min-width:160px;">
    <select onchange="STATE.filters.cat=this.value; render();">
      <option value="">${t('filterCategory')}: ${t('all')}</option>
      ${CATEGORIES.map(c=>`<option value="${c.id}" ${STATE.filters.cat===c.id?'selected':''}>${c[STATE.lang]||c.en}</option>`).join('')}
    </select>
    <select onchange="STATE.filters.state=this.value; render();">
      <option value="">${t('filterState')}: ${t('all')}</option>
      ${states.map(s=>`<option value="${s}" ${STATE.filters.state===s?'selected':''}>${s}</option>`).join('')}
    </select>
  </div>
  ${STATE.compareList.length>0?`<div class="panel" style="margin-bottom:12px;display:flex;justify-content:space-between;align-items:center;">
    <span style="font-size:12.5px;">${STATE.compareList.length} ${t('compare')}</span>
    <button class="link-btn" onclick="goto('compare')">${t('compare')} →</button>
  </div>`:''}
  <div class="card-grid">${list.length? list.map(schemeCardHTML).join('') : `<div class="empty">${t('all')} — 0 results</div>`}</div>
  `;
}

function viewDetail(){
  const s = SCHEMES.find(x=>x.id===STATE.schemeId);
  if(!s) return `<div class="empty">Not found</div>`;
  const tab = STATE._detailTab || 'overview';
  const fav = STATE.bookmarks.includes(s.id);
  return `
  <div class="back-link" onclick="goto('schemes')">← ${t('schemes')}</div>
  <div class="detail-head">
    <span class="pill cat">${CATEGORIES.find(c=>c.id===s.category)[STATE.lang]||CATEGORIES.find(c=>c.id===s.category).en}</span>
    <span class="pill state">${s.state}</span>
    <h1 style="font-size:20px;">${localized(s,'name')}</h1>
    <p class="muted" style="font-size:12.5px;margin:0;">${t('lastUpdated')}: ${s.updated}</p>
    <div style="margin-top:10px;">
      <button class="link-btn ${fav?'':'ghost'}" onclick="toggleBookmark('${s.id}')">${fav?'♥ '+t('saved'):'♡ '+t('save')}</button>
    </div>
  </div>
  <div class="tabbar">
    ${['overview','eligibility','documents','apply'].map(k=>`<button class="${tab===k?'active':''}" onclick="STATE._detailTab='${k}'; render();">${t(k==='overview'?'overview':k==='eligibility'?'eligibility':k==='documents'?'documents':'howToApply')}</button>`).join('')}
  </div>
  <div class="panel">
    ${tab==='overview'?`
      <h4>${t('objective')}</h4><p style="font-size:13px;">${localized(s,'objective')}</p>
      <h4>${t('benefits')}</h4><ul>${s.benefits.map(b=>`<li>${b}</li>`).join('')}</ul>
    `:''}
    ${tab==='eligibility'?`<p style="font-size:13px;">${s.eligibility}</p>
      <div class="warn-box">${t('level')}: ${s.level} · ${t('ageGroup')}: ${s.crit.ageMin}-${s.crit.ageMax} · ${t('incomeLimit')}: ₹${s.crit.incomeMax.toLocaleString('en-IN')}</div>
    `:''}
    ${tab==='documents'?`<div>${s.documents.map(d=>`<span class="doc-chip">📄 ${d}</span>`).join('')}</div>`:''}
    ${tab==='apply'?`<ol class="steps">${s.process.map(p=>`<li>${p}</li>`).join('')}</ol>
      <div class="apply-cta">
        <button class="link-btn" onclick="window.open('${s.link}','_blank')">🔗 ${t('official')}</button>
        <button class="link-btn ghost" onclick="markApplied('${s.id}'); goto('dashboard');">${t('markApplied')}</button>
      </div>
    `:''}
  </div>
  `;
}

function viewFind(){
  const f = STATE.eligForm || {age:'', gender:'female', state:'Maharashtra', occupation:'student', income:''};
  return `
  <div class="back-link" onclick="goto('home')">← ${t('home')}</div>
  <h2>🎯 ${t('findTitle')}</h2>
  <p class="muted" style="font-size:13px;">${t('findSub')}</p>
  <form class="ecf-form" onsubmit="event.preventDefault();
      const fd = {
        age: Number(document.getElementById('f_age').value)||0,
        gender: document.getElementById('f_gender').value,
        state: document.getElementById('f_state').value,
        occupation: document.getElementById('f_occ').value,
        income: Number(document.getElementById('f_income').value)||0
      };
      runEligibility(fd);
    ">
    <div class="field"><label>${t('age')}</label><input id="f_age" type="number" min="0" max="120" value="${f.age}" required></div>
    <div class="field"><label>${t('gender')}</label>
      <select id="f_gender">
        <option value="female" ${f.gender==='female'?'selected':''}>${t('female')}</option>
        <option value="male" ${f.gender==='male'?'selected':''}>${t('male')}</option>
        <option value="other" ${f.gender==='other'?'selected':''}>${t('other')}</option>
      </select>
    </div>
    <div class="field"><label>${t('stateField')}</label>
      <select id="f_state">
        <option value="Maharashtra" ${f.state==='Maharashtra'?'selected':''}>Maharashtra</option>
        <option value="Other" ${f.state==='Other'?'selected':''}>Other State</option>
      </select>
    </div>
    <div class="field"><label>${t('occupation')}</label>
      <select id="f_occ">
        <option value="student" ${f.occupation==='student'?'selected':''}>${t('student')}</option>
        <option value="farmer" ${f.occupation==='farmer'?'selected':''}>${t('farmer')}</option>
        <option value="employed" ${f.occupation==='employed'?'selected':''}>${t('employed')}</option>
        <option value="unemployed" ${f.occupation==='unemployed'?'selected':''}>${t('unemployed')}</option>
        <option value="self-employed" ${f.occupation==='self-employed'?'selected':''}>${t('selfEmployed')}</option>
      </select>
    </div>
    <div class="field"><label>${t('income')}</label><input id="f_income" type="number" min="0" value="${f.income}" required></div>
    <div class="checkrow"><button class="link-btn" type="submit" style="padding:10px 22px;">${t('findBtn')}</button></div>
  </form>

  ${STATE.eligResults ? `
    <div class="section-title"><h2>${t('results')} (${STATE.eligResults.length})</h2></div>
    ${STATE.eligResults.length===0?`<div class="empty">${t('all')} — 0</div>`:
      STATE.eligResults.map(r=>`
      <div class="match-card">
        <div style="display:flex;justify-content:space-between;"><h3 style="margin:0;font-size:15px;">${localized(r.scheme,'name')}</h3><b>${r.pct}% ${t('match')}</b></div>
        <div class="match-bar-bg"><div class="match-bar" style="width:${r.pct}%;"></div></div>
        <ul class="criteria-list">${r.notes.map(n=>`<li>${n.ok?'✅':'⚠️'} ${n.label}</li>`).join('')}</ul>
        <div class="row" style="margin-top:8px;">
          <button class="link-btn ghost" onclick="goto('detail',{schemeId:'${r.scheme.id}'})">${t('viewDetails')}</button>
          <button class="link-btn" onclick="window.open('${r.scheme.link}','_blank')">${t('apply')}</button>
        </div>
      </div>`).join('')}
  `:''}
  `;
}

function viewServices(){
  return `
  <div class="back-link" onclick="goto('home')">← ${t('home')}</div>
  <h2>${t('popularServices')}</h2>
  <div class="svc-grid">${SERVICES.map(serviceCardHTML).join('')}</div>
  `;
}

function viewServiceDetail(){
  const sv = SERVICES.find(x=>x.id===STATE.serviceId);
  if(!sv) return `<div class="empty">Not found</div>`;
  return `
  <div class="back-link" onclick="goto('services')">← ${t('services')}</div>
  <div class="detail-head">
    <h1 style="font-size:20px;">${sv.ic} ${STATE.lang==='mr'?sv.nameMr:sv.name}</h1>
    <p class="muted" style="font-size:12.5px;">${sv.desc}</p>
    <button class="link-btn" onclick="window.open('${sv.portalLink}','_blank')">🔗 ${sv.portal}</button>
  </div>
  <div class="panel" style="margin-bottom:12px;">
    <h4>${t('registration')}</h4>
    <p style="font-size:13px;">${sv.registration}</p>
  </div>
  <div class="panel" style="margin-bottom:12px;">
    <h4>${t('documents')}</h4>
    <div>${sv.documents.map(d=>`<span class="doc-chip">📄 ${d}</span>`).join('')}</div>
  </div>
  <div class="panel" style="margin-bottom:12px;">
    <h4>${t('howToApply')}</h4>
    <ol class="steps">${sv.steps.map(s=>`<li>${s}</li>`).join('')}</ol>
  </div>
  <div class="panel" style="margin-bottom:12px;">
    <h4>${t('checkStatus')}</h4>
    <p style="font-size:13px;">${sv.statusCheck}</p>
  </div>
  <div class="panel">
    <h4>${t('commonProblems')}</h4>
    <ul>${sv.problems.map(p=>`<li>${p}</li>`).join('')}</ul>
  </div>
  `;
}

function viewCompare(){
  const list = STATE.compareList.map(id=>SCHEMES.find(s=>s.id===id)).filter(Boolean);
  return `
  <div class="back-link" onclick="goto('schemes')">← ${t('schemes')}</div>
  <h2>⚖️ ${t('compareTitle')}</h2>
  <p class="muted" style="font-size:13px;">${t('compareSub')}</p>
  ${list.length===0?`<div class="empty">${t('addToCompare')} — 0/3</div>`:`
  <div style="overflow-x:auto;">
  <table class="compare">
    <tr><th>${t('schemeName')}</th>${list.map(s=>`<td><b>${localized(s,'name')}</b><br><button class="link-btn ghost small" style="margin-top:6px;" onclick="toggleCompare('${s.id}')">${t('removeFromCompare')}</button></td>`).join('')}</tr>
    <tr><th>${t('filterCategory')}</th>${list.map(s=>`<td>${CATEGORIES.find(c=>c.id===s.category)[STATE.lang]||CATEGORIES.find(c=>c.id===s.category).en}</td>`).join('')}</tr>
    <tr><th>${t('level')}</th>${list.map(s=>`<td>${s.level}</td>`).join('')}</tr>
    <tr><th>${t('objective')}</th>${list.map(s=>`<td>${localized(s,'objective')}</td>`).join('')}</tr>
    <tr><th>${t('benefits')}</th>${list.map(s=>`<td><ul style="margin:0;padding-left:16px;">${s.benefits.map(b=>`<li>${b}</li>`).join('')}</ul></td>`).join('')}</tr>
    <tr><th>${t('ageGroup')}</th>${list.map(s=>`<td>${s.crit.ageMin}-${s.crit.ageMax}</td>`).join('')}</tr>
    <tr><th>${t('incomeLimit')}</th>${list.map(s=>`<td>₹${s.crit.incomeMax.toLocaleString('en-IN')}</td>`).join('')}</tr>
    <tr><th>${t('documents')}</th>${list.map(s=>`<td><ul style="margin:0;padding-left:16px;">${s.documents.slice(0,3).map(d=>`<li>${d}</li>`).join('')}</ul></td>`).join('')}</tr>
    <tr><th>${t('official')}</th>${list.map(s=>`<td><button class="link-btn small" onclick="window.open('${s.link}','_blank')">${t('apply')}</button></td>`).join('')}</tr>
  </table>
  </div>`}
  `;
}

function viewDashboard(){
  const savedList = STATE.bookmarks.map(id=>SCHEMES.find(s=>s.id===id)).filter(Boolean);
  const badgeClass = {applied:'applied',review:'review',approved:'approved',rejected:'rejected'};
  return `
  <div class="back-link" onclick="goto('home')">← ${t('home')}</div>
  <h2>👤 ${t('dashTitle')}</h2>
  ${STATE.user?`<p class="muted" style="font-size:13px;">${t('welcome')}, <b>${STATE.user.name}</b></p>`:`<p class="muted" style="font-size:13px;">${t('notLoggedIn')} <span class="link" style="cursor:pointer;color:var(--marigold-deep);font-weight:600;" onclick="STATE.showAuth=true;STATE.authMode='login';render();">${t('login')}</span></p>`}
  <div class="dash-grid">
    <div class="dash-card">
      <h4>❤️ ${t('savedSchemes')}</h4>
      ${savedList.length===0?`<p class="muted" style="font-size:12.5px;">${t('noSaved')}</p>`:
        savedList.map(s=>`<div class="app-row"><span>${localized(s,'name')}</span>
          <button class="link-btn ghost small" onclick="goto('detail',{schemeId:'${s.id}'})">${t('viewDetails')}</button></div>`).join('')}
    </div>
    <div class="dash-card">
      <h4>📝 ${t('myApplications')}</h4>
      ${STATE.applications.length===0?`<p class="muted" style="font-size:12.5px;">${t('noApps')}</p>`:
        STATE.applications.map(a=>{
          const s = SCHEMES.find(x=>x.id===a.schemeId);
          if(!s) return '';
          return `<div class="app-row">
            <span>${localized(s,'name')}<br><span class="muted" style="font-size:10.5px;">${a.date}</span></span>
            <span style="display:flex;gap:6px;align-items:center;">
              <span class="status-badge ${badgeClass[a.status]}" style="cursor:pointer;" onclick="cycleStatus('${a.schemeId}')" title="Tap to update status">${t('status_'+a.status)}</span>
              <button class="link-btn ghost small" onclick="removeApplication('${a.schemeId}')">✕</button>
            </span>
          </div>`;
        }).join('')}
      <p class="muted" style="font-size:10.5px;margin-top:8px;">Tap a status badge to update it. This is a personal tracker — it does not reflect the government portal's real status.</p>
    </div>
  </div>
  `;
      }

function viewFaq(){
  return `
  <div class="back-link" onclick="goto('home')">← ${t('home')}</div>
  <h2>❓ ${t('faqTitle')}</h2>
  ${t('faqs').map((f,i)=>`
    <div class="faq-item" id="faq-${i}">
      <div class="faq-q" onclick="toggleFaq(${i})">${f[0]} <span>▾</span></div>
      <div class="faq-a">${f[1]}</div>
    </div>
  `).join('')}
  `;
}

function authModal(){
  if(!STATE.showAuth) return '';
  const mode = STATE.authMode;
  return `<div class="modal-bg" onclick="if(event.target===this){STATE.showAuth=null;render();}">
    <div class="modal">
      <button class="close-x" onclick="STATE.showAuth=null;render();">✕</button>
      <h3>${mode==='login'?t('login'):t('signup')}</h3>
      <form onsubmit="event.preventDefault();
          const name = document.getElementById('a_name')?document.getElementById('a_name').value:'${STATE.user?STATE.user.name:''}';
          const email = document.getElementById('a_email').value;
          doLogin(name||email.split('@')[0], email);
        ">
        ${mode==='signup'?`<input id="a_name" placeholder="${t('name')}" required>`:''}
        <input id="a_email" type="email" placeholder="${t('email')}" required>
        <input type="password" placeholder="${t('password')}" required>
        <button class="btn solid" type="submit">${mode==='login'?t('login'):t('createAccount')}</button>
      </form>
      <p style="text-align:center;font-size:12px;margin-top:10px;color:var(--marigold-deep);cursor:pointer;"
         onclick="STATE.authMode='${mode==='login'?'signup':'login'}'; render();">
        ${mode==='login'?t('needAccount'):t('alreadyHave')}
      </p>
      <p style="font-size:10.5px;color:var(--muted);text-align:center;">Demo login for this CEP project — not connected to any real government account.</p>
    </div>
  </div>`;
}

/* ============================= MAIN RENDER ============================= */
function render(){
  const tabs = [['home','🏠'],['schemes','📋'],['services','🧭'],['find','🎯'],['compare','⚖️'],['dashboard','👤'],['faq','❓']];
  const html = `
    <header class="topbar">
      <div class="brand" onclick="goto('home')">
        <div class="mark"><span>🇮🇳</span></div>
        <div class="brand-text"><div class="name">${t('siteName')}</div><div class="tag">${t('tagline')}</div></div>
      </div>
      <div class="top-actions">
        <select class="lang" onchange="setLang(this.value)">
          <option value="en" ${STATE.lang==='en'?'selected':''}>English</option>
          <option value="mr" ${STATE.lang==='mr'?'selected':''}>मराठी</option>
          <option value="hi" ${STATE.lang==='hi'?'selected':''}>हिंदी</option>
        </select>
        ${STATE.user?
          `<span style="font-size:12px;">👤 ${STATE.user.name}</span><button class="btn small" onclick="doLogout()">${t('logout')}</button>`
          :`<button class="btn small" onclick="STATE.showAuth=true;STATE.authMode='login';render();">${t('login')}</button>
            <button class="btn solid small" onclick="STATE.showAuth=true;STATE.authMode='signup';render();">${t('signup')}</button>`}
      </div>
    </header>
    <nav class="tabs">
      ${tabs.map(([v,ic])=>`<button class="${STATE.view===v?'active':''}" onclick="goto('${v}')">${ic} ${t(v==='find'?'findForMe':v)}</button>`).join('')}
    </nav>
    <main>
      ${STATE.view==='home'?viewHome():''}
      ${STATE.view==='schemes'?viewSchemes():''}
      ${STATE.view==='detail'?viewDetail():''}
      ${STATE.view==='find'?viewFind():''}
      ${STATE.view==='services'?viewServices():''}
      ${STATE.view==='serviceDetail'?viewServiceDetail():''}
      ${STATE.view==='compare'?viewCompare():''}
      ${STATE.view==='dashboard'?viewDashboard():''}
      ${STATE.view==='faq'?viewFaq():''}
    </main>
    <footer>${t('siteName')} · ${new Date().getFullYear()} · Community Engagement Project — Assisting Citizens in Using Government Digital Portals</footer>
    ${authModal()}
  `;
  document.getElementById('app').innerHTML = html;
}

loadAll();
