var index = new LADDERS.search.index();
var titles = new LADDERS.search.document();
var d = new LADDERS.search.document();
d.add("id", 'dependencies.html');
d.add("text", "Project Dependencies Last Published 2011 11 11   Version 0 0 1 SNAPSHOT Menu Overview Project Documentation Project Information Distribution Management About Dependencies Issue Tracking Project Plugins Continuous Integration Project License Mailing Lists Project Team Source Repository Plugin Management Project Summary Project Dependencies compile The following is a list of compile dependencies for this project These dependencies are required to compile and run the application GroupId ArtifactId Version Type License org apache maven maven plugin api 2 0 jar The Apache Software License Version 2 0 org jsoup jsoup 0 2 2 jar The MIT License test The following is a list of test dependencies for this project These dependencies are only required to compile and run unit tests for the application GroupId ArtifactId Version Type License junit junit 4 8 2 jar Common Public License Version 1 0 Project Transitive Dependencies The following is a list of transitive dependencies for this project Transitive dependencies are the dependencies of the project dependencies compile The following is a list of compile dependencies for this project These dependencies are required to compile and run the application GroupId ArtifactId Version Type License commons lang commons lang 2 4 jar The Apache Software License Version 2 0 Project Dependency Graph Dependency Tree org apache maven plugins index maven plugin 0 0 1 SNAPSHOT Maven Site Indexer Description There is currently no description associated with this project URL http maven apache org Project License No project license is defined for this project org apache maven maven plugin api jar 2 0 compile Maven Plugin API Description Maven is a project development management and comprehension tool Based on the concept of a project object model builds dependency management documentation creation site publication and distribution publication are all controlled from the declarative file Maven can be extended by plugins to utilise a number of other development tools for reporting or the build process URL http maven apache org maven2 maven plugin api Project License The Apache Software License Version 2 0 org jsoup jsoup jar 0 2 2 compile jsoup Description jsoup HTML parser URL http jsoup org Project License The MIT License commons lang commons lang jar 2 4 compile Commons Lang Description Commons Lang a package of Java utility classes for the classes that are in java lang s hierarchy or are considered to be so standard as to justify existence in java lang URL http commons apache org lang Project License The Apache Software License Version 2 0 junit junit jar 4 8 2 test JUnit Description JUnit is a regression testing framework It is used by the developer who implements unit tests in Java URL http junit org Project License Common Public License Version 1 0 Licenses Unknown Maven Site Indexer Common Public License Version 1 0 JUnit The Apache Software License Version 2 0 Commons Lang Maven Plugin API The MIT License jsoup Dependency File Details Filename Size Entries Classes Packages JDK Rev Debug commons lang 2 4 jar 255 67 kB 148 127 9 1 2 debug junit 4 8 2 jar 231 78 kB 267 230 30 1 5 debug maven plugin api 2 0 jar 9 90 kB 21 9 2 1 1 debug jsoup 0 2 2 jar 58 32 kB 53 39 6 1 5 debug Total Size Entries Classes Packages JDK Rev Debug 4 555 67 kB 489 405 47 1 5 4 compile 3 compile 323 89 kB compile 222 compile 175 compile 17 compile 3 test 1 test 231 78 kB test 267 test 230 test 30 test 1 Dependency Repository Locations Repo ID URL Release Snapshot Blacklisted apache snapshots http people apache org repo m2 snapshot repository Yes snapshots http snapshots maven codehaus org maven2 Yes Yes central http repo1 maven org maven2 Yes Repository locations for each of the Dependencies Artifact apache snapshots central commons lang commons lang jar 2 4 junit junit jar 4 8 2 org apache maven maven plugin api jar 2 0 org jsoup jsoup jar 0 2 2 Total apache snapshots central 4 compile 3 test 1 0 4 Copyright 2011 All Rights Reserved ");
d.add("title", 'Project Dependencies');
titles.add("dependencies.html", "Project Dependencies");
index.addDocument(d);

var d = new LADDERS.search.document();
d.add("id", 'distribution-management.html');
d.add("text", "Project Distribution Management Last Published 2011 11 11   Version 0 0 1 SNAPSHOT Menu Overview Project Documentation Project Information Distribution Management About Dependencies Issue Tracking Project Plugins Continuous Integration Project License Mailing Lists Project Team Source Repository Plugin Management Project Summary Overview The following is the distribution management information used by this project Site gh pages file C Development MavenSiteIndexerPlugin site Copyright 2011 All Rights Reserved ");
d.add("title", 'Project Distribution Management');
titles.add("distribution-management.html", "Project Distribution Management");
index.addDocument(d);

var d = new LADDERS.search.document();
d.add("id", 'index.html');
d.add("text", "Maven Site Indexer Plugin Last Published 2011 11 11   Version 0 0 1 SNAPSHOT Menu Overview Project Documentation Project Information Distribution Management About Dependencies Issue Tracking Project Plugins Continuous Integration Project License Mailing Lists Project Team Source Repository Plugin Management Project Summary Maven Site Indexer plugin An easy way to index your maven site and give it a nice ajax search box It s easy as putting searchbox html in site resources putting search js in site js mvn site site index index mvn site deploy open up your deployed site and enjoy your nice and free search box Copyright 2011 All Rights Reserved ");
d.add("title", 'Maven Site Indexer Plugin');
titles.add("index.html", "Maven Site Indexer Plugin");
index.addDocument(d);

var d = new LADDERS.search.document();
d.add("id", 'integration.html');
d.add("text", "Continuous Integration Last Published 2011 11 11   Version 0 0 1 SNAPSHOT Menu Overview Project Documentation Project Information Distribution Management About Dependencies Issue Tracking Project Plugins Continuous Integration Project License Mailing Lists Project Team Source Repository Plugin Management Project Summary Continuous Integration No continuous integration management system is defined Please check back at a later date Copyright 2011 All Rights Reserved ");
d.add("title", 'Continuous Integration');
titles.add("integration.html", "Continuous Integration");
index.addDocument(d);

var d = new LADDERS.search.document();
d.add("id", 'issue-tracking.html');
d.add("text", "Issue Tracking Last Published 2011 11 11   Version 0 0 1 SNAPSHOT Menu Overview Project Documentation Project Information Distribution Management About Dependencies Issue Tracking Project Plugins Continuous Integration Project License Mailing Lists Project Team Source Repository Plugin Management Project Summary Issue Tracking No issue management system is defined Please check back at a later date Copyright 2011 All Rights Reserved ");
d.add("title", 'Issue Tracking');
titles.add("issue-tracking.html", "Issue Tracking");
index.addDocument(d);

var d = new LADDERS.search.document();
d.add("id", 'license.html');
d.add("text", "Project License Last Published 2011 11 11   Version 0 0 1 SNAPSHOT Menu Overview Project Documentation Project Information Distribution Management About Dependencies Issue Tracking Project Plugins Continuous Integration Project License Mailing Lists Project Team Source Repository Plugin Management Project Summary Project License No project license is defined for this project Copyright 2011 All Rights Reserved ");
d.add("title", 'Project License');
titles.add("license.html", "Project License");
index.addDocument(d);

var d = new LADDERS.search.document();
d.add("id", 'mail-lists.html');
d.add("text", "Project Mailing Lists Last Published 2011 11 11   Version 0 0 1 SNAPSHOT Menu Overview Project Documentation Project Information Distribution Management About Dependencies Issue Tracking Project Plugins Continuous Integration Project License Mailing Lists Project Team Source Repository Plugin Management Project Summary Project Mailing Lists There are no mailing lists currently associated with this project Copyright 2011 All Rights Reserved ");
d.add("title", 'Project Mailing Lists');
titles.add("mail-lists.html", "Project Mailing Lists");
index.addDocument(d);

var d = new LADDERS.search.document();
d.add("id", 'plugin-management.html');
d.add("text", "Project Plugin Management Last Published 2011 11 11   Version 0 0 1 SNAPSHOT Menu Overview Project Documentation Project Information Distribution Management About Dependencies Issue Tracking Project Plugins Continuous Integration Project License Mailing Lists Project Team Source Repository Plugin Management Project Summary Project Plugin Management GroupId ArtifactId Version org apache maven plugins maven antrun plugin 1 3 org apache maven plugins maven assembly plugin 2 2 beta 5 org apache maven plugins maven dependency plugin 2 1 org apache maven plugins maven release plugin 2 0 Copyright 2011 All Rights Reserved ");
d.add("title", 'Project Plugin Management');
titles.add("plugin-management.html", "Project Plugin Management");
index.addDocument(d);

var d = new LADDERS.search.document();
d.add("id", 'plugins.html');
d.add("text", "Project Build Plugins Last Published 2011 11 11   Version 0 0 1 SNAPSHOT Menu Overview Project Documentation Project Information Distribution Management About Dependencies Issue Tracking Project Plugins Continuous Integration Project License Mailing Lists Project Team Source Repository Plugin Management Project Summary Project Build Plugins GroupId ArtifactId Version org apache maven plugins maven clean plugin 2 4 1 org apache maven plugins maven compiler plugin 2 3 2 org apache maven plugins maven deploy plugin 2 5 org apache maven plugins maven install plugin 2 3 1 org apache maven plugins maven jar plugin 2 3 1 org apache maven plugins maven plugin plugin 2 7 org apache maven plugins maven resources plugin 2 4 3 org apache maven plugins maven site plugin 3 0 org apache maven plugins maven surefire plugin 2 7 2 Project Report Plugins There are no plugins reports defined in the Reporting part of this project Copyright 2011 All Rights Reserved ");
d.add("title", 'Project Build Plugins');
titles.add("plugins.html", "Project Build Plugins");
index.addDocument(d);

var d = new LADDERS.search.document();
d.add("id", 'project-info.html');
d.add("text", "Project Information Last Published 2011 11 11   Version 0 0 1 SNAPSHOT Menu Overview Project Documentation Project Information Distribution Management About Dependencies Issue Tracking Project Plugins Continuous Integration Project License Mailing Lists Project Team Source Repository Plugin Management Project Summary Project Information This document provides an overview of the various documents and links that are part of this project s general information All of this content is automatically generated by Maven on behalf of the project Overview Document Description Distribution Management This document provides informations on the distribution management of this project About There is currently no description associated with this project Dependencies This document lists the project s dependencies and provides information on each dependency Issue Tracking This is a link to the issue management system for this project Issues bugs features change requests can be created and queried using this link Project Plugins This document lists the build plugins and the report plugins used by this project Continuous Integration This is a link to the definitions of all continuous integration processes that builds and tests code on a frequent regular basis Project License This is a link to the definitions of project licenses Mailing Lists This document provides subscription and archive information for this project s mailing lists Project Team This document provides information on the members of this project These are the individuals who have contributed to the project in one form or another Source Repository This is a link to the online source repository that can be viewed via a web browser Plugin Management This document lists the plugins that are defined through pluginManagement Project Summary This document lists other related information of this project Copyright 2011 All Rights Reserved ");
d.add("title", 'Project Information');
titles.add("project-info.html", "Project Information");
index.addDocument(d);

var d = new LADDERS.search.document();
d.add("id", 'project-summary.html');
d.add("text", "Project Summary Last Published 2011 11 11   Version 0 0 1 SNAPSHOT Menu Overview Project Documentation Project Information Distribution Management About Dependencies Issue Tracking Project Plugins Continuous Integration Project License Mailing Lists Project Team Source Repository Plugin Management Project Summary Project Summary Project Information Field Value Name Maven Site Indexer Description Homepage http maven apache org Project Organization This project does not belong to an organization Build Information Field Value GroupId org apache maven plugins ArtifactId index Version 0 0 1 SNAPSHOT Type maven plugin JDK Rev Copyright 2011 All Rights Reserved ");
d.add("title", 'Project Summary');
titles.add("project-summary.html", "Project Summary");
index.addDocument(d);

var d = new LADDERS.search.document();
d.add("id", 'searchbox.html');
d.add("text", "");
d.add("title", '');
titles.add("searchbox.html", "");
index.addDocument(d);

var d = new LADDERS.search.document();
d.add("id", 'source-repository.html');
d.add("text", "Source Repository Last Published 2011 11 11   Version 0 0 1 SNAPSHOT Menu Overview Project Documentation Project Information Distribution Management About Dependencies Issue Tracking Project Plugins Continuous Integration Project License Mailing Lists Project Team Source Repository Plugin Management Project Summary Source Repository No source configuration management system is defined Please check back at a later date Copyright 2011 All Rights Reserved ");
d.add("title", 'Source Repository');
titles.add("source-repository.html", "Source Repository");
index.addDocument(d);

var d = new LADDERS.search.document();
d.add("id", 'team-list.html');
d.add("text", "Team list Last Published 2011 11 11   Version 0 0 1 SNAPSHOT Menu Overview Project Documentation Project Information Distribution Management About Dependencies Issue Tracking Project Plugins Continuous Integration Project License Mailing Lists Project Team Source Repository Plugin Management Project Summary The Team A successful project requires many people to play many roles Some members write code or documentation while others are valuable as testers submitting patches and suggestions The team is comprised of Members and Contributors Members have direct access to the source of a project and actively evolve the code base Contributors improve the project through submission of patches and suggestions to the Members The number of Contributors to the project is unbounded Get involved today All contributions to the project are greatly appreciated Members There are no developers working on this project Contributors There are no contributors listed for this project Please check back again later Copyright 2011 All Rights Reserved ");
d.add("title", 'Team list');
titles.add("team-list.html", "Team list");
index.addDocument(d);

