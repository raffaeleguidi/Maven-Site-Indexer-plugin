package org.apache.maven.siteindexer.test;

import java.io.IOException;

import org.apache.maven.siteindexer.Indexer;
import org.junit.Test;

public class IndexerTest {
	@Test
	public void indexTest() {
		Indexer indexer = new Indexer();
		try {
			indexer.buildIndex(
					"C:\\Development\\Apache\\directmemory\\trunk\\target\\site\\", 
					"index.js");
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}
