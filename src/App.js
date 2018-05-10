import React, { Component } from "react";
import sha256 from "js-sha256";
import Dropzone from "react-dropzone";

// Styles
import "./assets/css/montserrat.css";
import "./assets/css/flexbox-grid-min.css";
import "./assets/css/main.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notafile: {},
      searchfile: {}
    };
  }

  clearNotaFile() {
    this.setState({
      ...this.state,
      notahash: null,
      notafile: {}
    });
  }

  clearSearchFile() {
    this.setState({
      ...this.state,
      searchhash: null,
      searchfile: {}
    });
  }

  onDropNota(notafiles) {
    const self = this;
    this.setState({
      ...this.state,
      notafile: notafiles[0]
    });
    const reader = new FileReader();

    reader.onabort = () => console.log("file reading was aborted");
    reader.onerror = () => console.log("file reading has failed");
    reader.onload = () => {
      self.setState({
        ...self.state,
        notahash: sha256(reader.result)
      });
    };

    reader.readAsBinaryString(notafiles[0]);
  }

  onDropSearch(searchfiles) {
    const self = this;
    const reader = new FileReader();
    reader.onabort = () => console.log("file reading was aborted");
    reader.onerror = () => console.log("file reading has failed");
    reader.onload = () => {
      self.setState({
        ...self.state,
        searchfile: searchfiles[0],
        searchhash: sha256(reader.result)
      });
    };

    reader.readAsBinaryString(searchfiles[0]);
  }

  render() {
    return (
      <div>
        <div className="header">
          <div className="logo" />
          <div className="site-nav">
            <a href="#" className="nav-item">
              Notarise File
            </a>
            <a href="#" className="nav-item">
              Search File
            </a>
            <a href="#" className="nav-item">
              How it works
            </a>
            <a href="#" className="nav-item">
              About
            </a>
          </div>
        </div>
        <div className="container margin-bottom margin-top">
          <div className="row">
            <div className="col-md-4 col-sm-12 col-xs-12">
              <div className="box">
                <h1>ANKER_</h1>
                <div className="text-m">
                  <p>Notarise your documents on the Blockchain.</p>
                  <p>
                    Calculate the unique hash of your file locally, Anker will
                    add the hash to the Notary contract which you can sign and
                    broadcast using your Ethereum browser.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="box">
                <div className="modal">
                  <div className="modal-title">Notarise a file</div>

                  {this.state.notafile.name && (
                    <div className="modal-item file">
                      <div className="modal-item-title">Filename</div>
                      <div className="modal-item-content">
                        <div className="modal-item-icon file-icon" />
                        <div className="modal-item-description">
                          {this.state.notafile.name}
                        </div>
                        <div
                          className="modal-item-icon cross-icon"
                          onClick={this.clearNotaFile.bind(this)}
                        />
                      </div>
                    </div>
                  )}
                  {!this.state.notafile.name && (
                    <div className="dropzone">
                      <Dropzone onDrop={this.onDropNota.bind(this)}>
                        <div className="dd-content">
                          <span className="dd-text-bold">Choose a file </span>
                          <span className="dd-text"> or drag it here</span>
                        </div>
                      </Dropzone>
                    </div>
                  )}
                  {this.state.notafile.name && (
                    <div className="modal-item file">
                      <div className="modal-item-title">Fingerprint</div>
                      <div className="modal-item-content">
                        <div className="modal-item-description">
                          {this.state.notahash
                            ? this.state.notahash
                            : "Calculating hash..."}
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="modal-button">Notarise</div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="box">
                <div className="modal">
                  <div className="modal-title">Search for a file</div>

                  {this.state.searchfile.name && (
                    <div className="modal-item file">
                      <div className="modal-item-title">Filename</div>
                      <div className="modal-item-content">
                        <div className="modal-item-icon file-icon" />
                        <div className="modal-item-description">
                          {this.state.searchfile.name}
                        </div>
                        <div
                          className="modal-item-icon cross-icon"
                          onClick={this.clearSearchFile.bind(this)}
                        />
                      </div>
                    </div>
                  )}
                  {!this.state.searchfile.name && (
                    <div className="dropzone">
                      <Dropzone onDrop={this.onDropSearch.bind(this)}>
                        <div className="dd-content">
                          <span className="dd-text-bold">Choose a file </span>
                          <span className="dd-text"> or drag it here</span>
                        </div>
                      </Dropzone>
                    </div>
                  )}
                  {this.state.searchfile.name && (
                    <div className="modal-item file">
                      <div className="modal-item-title">Fingerprint</div>
                      <div className="modal-item-content">
                        <div className="modal-item-description">
                          {this.state.searchhash
                            ? this.state.searchhash
                            : "Calculating hash..."}
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="modal-button">Search</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container margin-bottom">
          <h2>HOW IT WORKS</h2>
          <div className="row">
            <div className="col-md-4 col-sm-12 col-xs-12">
              <div className="row">
                <div className="col-xs-11">
                  <div className="how-icon icon-fingerprint" />
                  <h3>1. Calculate Unique Fingerprint</h3>
                  <div className="text-m">
                    <p>
                      Each document has unique fingerprints. One of those
                      fingerprints is the so called SHA-256 Hash. The cool thing
                      about SHA-256 hashes is that they’re easy to calculate,
                      but very hard to forge!{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12">
              <div className="row">
                <div className="col-xs-11">
                  <div className="how-icon icon-decentralized" />
                  <h3>2.Persist Fingerprint To Blockchain</h3>
                  <div className="text-m">
                    <p>
                      Once the hash is calculated, Anchor creates a small
                      contract which allows you to add this hash to the Ethereum
                      blockchain. This contract is then broadcasted, and ready
                      to be mined.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12">
              <div className="row">
                <div className="col-xs-11">
                  <div className="how-icon icon-verify" />
                  <h3>3. Share Distributed Proof of Existence</h3>
                  <div className="text-m">
                    <p>
                      As soon as the contract is mined into the blockchain,
                      everyone in the network can now verify that as of that
                      block’s time, the document was in existence, signed by
                      you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container margin-bottom">
          <h2>ABOUT ANKER_</h2>
          <div className="row">
            <div className="col-md-6 col-sm-12 col-xs-12">
              <div className="text-m">
                <p>
                  Witnessing a signature at a certain moment in time by a
                  decentralized network is one of the basic ingredients in
                  almost all blockchain use cases.{" "}
                </p>
                <p>
                  A notary is a person licensed by the government to perform
                  acts in legal affairs, in particular witnessing signatures on
                  documents (*Wiki).
                </p>
                <p>
                  The basic principle behind this is that someone else than you
                  can vouch that a certain piece of data existed and signed by
                  you at a certain moment of time.{" "}
                </p>
                <p>
                  Anker simply replaces that person by the Ethereum network.{" "}
                </p>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12">
              <div className="text-m">
                <p>
                  Given the fact that the basic principle behind the notary
                  system effectively didn’t change much over the last 400 years,
                  we hope that with this tool, we can convince governments all
                  over the world that notarisation now can be done faster,
                  cheaper and more reliable.{" "}
                </p>
                <p>
                  Anker is an{" "}
                  <a href="https://github.com/anker-notary" target="_blank">
                    open source project
                  </a>, developed by{" "}
                  <a href="https://github.com/d1gits" target="_blank">
                    d1gits.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
