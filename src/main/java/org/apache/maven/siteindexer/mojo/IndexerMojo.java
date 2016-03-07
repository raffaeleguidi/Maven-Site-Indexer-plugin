package org.apache.maven.siteindexer.mojo;

import java.io.File;
import java.io.IOException;

import org.apache.maven.plugin.AbstractMojo;
import org.apache.maven.plugin.MojoExecutionException;
import org.apache.maven.plugin.MojoFailureException;
import org.apache.maven.siteindexer.Indexer;

/**
 * This goal will build the index.
 *
 * @goal index
 * @aggregator
 *
 */
public class IndexerMojo extends AbstractMojo {

    private static final String FSEP = File.separator;
    private static final String SITE_PATH = "target" + FSEP + "site" + FSEP;

    @Override
    public void execute() throws MojoExecutionException, MojoFailureException {
        Indexer indexer = new Indexer(getLog());
        try {
            getLog().info("Maven Site Index");
            getLog().info("------------------------------");
            getLog().info("building index.js...");
            indexer.buildIndex(SITE_PATH, SITE_PATH + "js" + FSEP + "index.js");
            getLog().info("done.");
        } catch (IOException e) {
            getLog().error(e);
        }
    }
}
