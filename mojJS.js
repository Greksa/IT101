// JavaScript Document
var i = 0;
var speed = 10;
var abort = false;
var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

var text2 = "Morem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

var text3 = "Morem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

var text4 = "Morem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

function menjaBoju() {
	document.getElementById("ukras").style.backgroundColor = "gold";
	document.getElementById("ukras2").style.backgroundColor = "gold";
	document.getElementById("cv").style.outlineColor = "gold";
}

function ponistiDugme() {
	document.getElementById("dugme-css2").disabled = true;
	document.getElementById("dugme-css").disabled = true;
	document.getElementById("dugme-css3").disabled = true;
	document.getElementById("dugme-css4").disabled = true;
}

function vratiDugme() {
	document.getElementById("dugme-css2").disabled = false;
	document.getElementById("dugme-css").disabled = false;
	document.getElementById("dugme-css3").disabled = false;
	document.getElementById("dugme-css4").disabled = false;

	document.getElementById("ukras").style.backgroundColor = "white";
	document.getElementById("ukras2").style.backgroundColor = "white";
	document.getElementById("cv").style.outlineColor = "white";
}

function typeWriter() {

	if (i < text.length && abort == false) {
		ponistiDugme();
		document.getElementById("cv").innerHTML += text.charAt(i);
		i++;
		if (i == text.length) {
			abort = true;
			setTimeout(() => {
				document.getElementById("cv").innerHTML = '';
				abort = false;
				vratiDugme()
			}, 4000);

		}
		setTimeout(typeWriter, speed);
	}

}

function typeWriter2() {

	if (i < text2.length && abort == false) {
		ponistiDugme();
		document.getElementById("cv").innerHTML += text2.charAt(i);
		i++;
		if (i == text2.length) {
			abort = true;
			setTimeout(() => {
				document.getElementById("cv").innerHTML = '';
				abort = false;
				vratiDugme()
			}, 4000);

		}
		setTimeout(typeWriter, speed);
	}

}

function typeWriter3() {

	if (i < text3.length && abort == false) {
		ponistiDugme();
		document.getElementById("cv").innerHTML += text3.charAt(i);
		i++;
		if (i == text3.length) {
			abort = true;
			setTimeout(() => {
				document.getElementById("cv").innerHTML = '';
				abort = false;
				vratiDugme()
			}, 4000);

		}
		setTimeout(typeWriter, speed);
	}

}

function typeWriter4() {

	if (i < text4.length && abort == false) {
		ponistiDugme();
		document.getElementById("cv").innerHTML += text4.charAt(i);
		i++;
		if (i == text4.length) {
			abort = true;
			setTimeout(() => {
				document.getElementById("cv").innerHTML = '';
				abort = false;
				vratiDugme()
			}, 4000);

		}
		setTimeout(typeWriter, speed);
	}

}

function resetuj() {
	i = 0;
}

function bigImg(x) {
	x.style.height = "90px";
	x.style.width = "120px";
	document.getElementById("kontent2").innerHTML = "";
}

function normalImg(x) {
	x.style.height = "50px";
	x.style.width = "90px";
	document.getElementById("kontent2").innerHTML = "<h4>We use experience from each of our areas of expertise (data science, data engineering, devops) to offer both advisory and implementation services to our clients.<br><br>Also we offer blend of those 3 areas of expertise which are an integral part of building production ready SMART solutions: our data science team will develop algorithms and models, the data engineering team will work closely with the data science team to choose the right tools and figure out the best possible way to crunch data and then our DevOps team will carefully choose the right infrastructure according to all requirements, add automation, monitoring and testing.</h4>"


}



function prikaziTekst(x) {

	if (x == "slika1") {
		document.getElementById("kontent2").innerHTML = "<h4>Software development organizations implement process methodologies to ease the process of development. Sometimes, contractors may require methodologies employed, an example is the U.S. defense industry, which requires a rating based on process models to obtain contracts. The international standard for describing the method of selecting, implementing and monitoring the life cycle for software is ISO/IEC 12207.<br>A decades-long goal has been to find repeatable, predictable processes that improve productivity and quality. Some try to systematize or formalize the seemingly unruly task of designing software. Others apply project management techniques to designing software. Large numbers of software projects do not meet their expectations in terms of functionality, cost, or delivery schedule - see List of failed and overbudget custom software projects for some notable examples.<br>Organizations may create a Software Engineering Process Group (SEPG), which is the focal point for process improvement. Composed of line practitioners who have varied skills, the group is at the center of the collaborative effort of everyone in the organization who is involved with software engineering process improvement.<br>A particular development team may also agree to programming environment details, such as which integrated development environment is used, and one or more dominant programming paradigms, programming style rules, or choice of specific software libraries or software frameworks. These details are generally not dictated by the choice of model or general methodology.</h4>"
	} else if (x == "slika2") {
		document.getElementById("kontent2").innerHTML = "<h4>Technical support (often shortened to tech support) refers to services that entities provide to users of technology products or services. In general, technical support provide help regarding specific problems with a product or service, rather than providing training, provision or customization of product, or other support services.<br><br> Most companies offer technical support for the services or products they sell, either included in the cost or for an additional fee. Technical support may be delivered over by phone, e-mail, live support software on a website, or other tool where users can log an incident. Larger organizations frequently have internal technical support available to their staff for computer-related problems. The Internet can also be a good source for freely available tech support, where experienced users help users find solutions to their problems. In addition, some fee-based service companies charge for premium technical support services.</h4>"
	} else if (x == "slika3") {
		document.getElementById("kontent2").innerHTML = "<h4>System administration is typically done by information technology experts for or within an organization. Their job is to ensure that all related computer systems and services keep working . A system administrator, or sysadmin, is a person responsible to maintain and operate a computer system or network for a company or other organization. System administrators are often members of an information technology department. The duties of a system administrator are wide-ranging, and vary from one organization to another.<br><br> System administrators are usually charged with installing, supporting, and maintaining servers or other computer systems, and planning for and responding to service outages and other problems. Other duties may include scripting or light programming, project management for systems-related projects, supervising or training computer operators, and being the equivalent of a handyman for computer problems beyond the knowledge of technical support staff. It is common for systems administrators and systems analysts charged with developing and maintaining computer processes to identify operational and developmental systems. This is done to provide maximum reliability and availability on mission-critical systems used within the organization's processes by generic users to accomplish routine work while providing developmental resources to computer process development or research teams augmenting existing or developing new processes for the organization.</h4>"
	} else if (x == "slika4") {
		document.getElementById("kontent2").innerHTML = "<h4>Quality assurance (QA) is a way of preventing mistakes and defects in manufactured products and avoiding problems when delivering products or services to customers; which ISO 9000 defines as part of quality management focused on providing confidence that quality requirements will be fulfilled. This defect prevention in quality assurance differs subtly from defect detection and rejection in quality control and has been referred to as a shift left since it focuses on quality earlier in the process (i.e., to the left of a linear process diagram reading left to right).<br<br> The terms quality assurance and quality control are often used interchangeably to refer to ways of ensuring the quality of a service or product. For instance, the term assurance is often used as follows: Implementation of inspection and structured testing as a measure of quality assurance in a television set software project at Philips Semiconductors is described. The term control, however, is used to describe the fifth phase of the Define, Measure, Analyze, Improve, Control (DMAIC) model. DMAIC is a data-driven quality strategy used to improve processes.Quality assurance comprises administrative and procedural activities implemented in a quality system so that requirements and goals for a product, service or activity will be fulfilled. It is the systematic measurement, comparison with a standard, monitoring of processes and an associated feedback loop that confers error prevention. This can be contrasted with quality control, which is focused on process output.</h4>"
	} else if (x == "slika5") {
		document.getElementById("kontent2").innerHTML = "<h4>Data science is an inter-disciplinary field that uses scientific methods, processes, algorithms and systems to extract knowledge and insights from many structural and unstructured data. Data science is related to data mining and big data.Data science is a concept to unify statistics, data analysis, machine learning and their related methods in order to understand and analyze actual phenomena with data.<br><br> It employs techniques and theories drawn from many fields within the context of mathematics, statistics, computer science, and information science. Turing award winner Jim Gray imagined data science as a fourth paradigm of science (empirical, theoretical, computational and now data-driven) and asserted that everything about science is changing because of the impact of information technology and the data deluge. In 2015, the American Statistical Association identified database management, statistics and machine learning, and distributed and parallel systems as the three emerging foundational professional communities.</h4>"
	} else if (x == "slika6") {
		document.getElementById("kontent2").innerHTML = "<h4>As DevOps is intended to be a cross-functional mode of working, those that practice the methodology use different sets of tools—referred to as toolchains—rather than a single one. These toolchains are expected to fit into one or more of the following categories, reflective of key aspects of the development and delivery process:<br>Coding– code development and review, source code management tools, code merging<br>Building– continuous integration tools, build statusTesting– continuous testing tools that provide quick and timely feedback on business risksPackaging– artifact repository, application pre - deployment staging Releasing– change management, release approvals, release automation Configuring – infrastructure configuration and management, infrastructure as code tools Monitoring– applications performance monitoring, end - user experience Some categories are more essential in a DevOps toolchain than others; especially continuous integration(e.g.Jenkins, Gitlab, Bitbucket pipelines) and infrastructure as code(e.g., Terraform, Ansible, Puppet). IT performance is strongly correlated with DevOps practices like source code management and continuous delivery.</h4>"
	} else if (x == "slika7") {
		document.getElementById("kontent2").innerHTML = "<h4>The data science field is incredibly broad, encompassing everything from cleaning data to deploying predictive models. However, it’s rare for any single data scientist to be working across the spectrum day to day. Data scientists usually focus on a few areas, and are complemented by a team of other scientists and analysts.Data engineering is also a broad field, but any individual data engineer doesn’t need to know the whole spectrum of skills.<br><br> In this section, we’ll sketch the broad outlines of data engineering, then walk through more specific descriptions that illustrate specific data engineering roles.A data engineer transforms data into a useful format for analysis. Imagine that you’re a data engineer working on a simple competitor to Uber called Rebu. Your users have an app on their device through which they access your service. They request a ride to a destination through your app, which gets routed to a driver, who then picks them up and drops them off. After the ride, they’re charged, and have the option to rate their driver.</h4>"
	}



	function myMap() {
		var mapProp = {
			center: new google.maps.LatLng(51.508742, -0.120850),
			zoom: 5,
		};
		var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
	}


}
