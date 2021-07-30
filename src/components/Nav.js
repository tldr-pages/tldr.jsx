//@flow

/*******************************************************************************
 * Imports
 *******************************************************************************/

import React from "react";

import GithubButton from "tldr/components/GithubButton";
import Tldr from "tldr/components/Tldr";
import Version from "tldr/components/Version";

import type { Package } from "tldr/Tldr";

/*******************************************************************************
 * Type Definitions
 *******************************************************************************/

type NavigateProps = {
  navigate(to: string): any,
  version: Package,
};

/*******************************************************************************
 * Public API
 *******************************************************************************/

export default ({ navigate, version }: NavigateProps) => (
  <nav>
    <section className="content">
      <section className="brand-and-version">
        <Tldr />
        <Version {...version} />
      </section>
      <section className="search">
        <input
          autofocus
          tabIndex="100"
          type="text"
          onChange={({ target: { value } }) => navigate(value)}
          placeholder="Command (i.e. 'git') optionally prefixed by the OS (i.e. 'osx/mas' ; supported OS: android, common, linux, osx, sunos and windows)."
        />
      </section>
      <section className="github-stars">
        <GithubButton
          type="star"
          repository="tldr.jsx"
          user="ostera"
          count={true}
          size="large"
        />
      </section>
    </section>
  </nav>
);
