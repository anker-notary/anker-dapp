import React, { Component } from 'react';
import sha256 from 'js-sha256';
import Dropzone from 'react-dropzone'

// Styles
import './css/montserrat.css'
import './css/flexbox-grid-min.css'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = { files: [] }
  }

  onDropNota(files) {
    const self = this
    const reader = new FileReader();
    reader.onabort = () => console.log('file reading was aborted');
    reader.onerror = () => console.log('file reading has failed');
    reader.onload = () => {
      self.setState({
        ...self.state,
        notahash: sha256(reader.result)
      });
    }

    reader.readAsBinaryString(files[0])
    
  }

  onDropSearch(files) {
    const self = this
    const reader = new FileReader();
    reader.onabort = () => console.log('file reading was aborted');
    reader.onerror = () => console.log('file reading has failed');
    reader.onload = () => {
      self.setState({
        ...self.state,
        searchhash: sha256(reader.result)
      });
    }

    reader.readAsBinaryString(files[0])
    
  }

  render() {
    return (
      <div>
        <div className="header">
          <div className="logo"></div>
          <div className="nav">
            <div className="nav-item">
              
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-12 col-xs-12">
              <div className="box">
                <h1>ANKER_</h1>
                <div className="text-m">
                  <p>A very simple blockchain notary service. </p>
                  <p>Calculate the unique hash of your file locally, Anker will generate a smart contract which you can sign and broadcast using your Ethereum browser. </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="box">
                <div className="modal">
                  <div>Notarise a file</div>
                  <Dropzone onDrop={this.onDropNota.bind(this)}>
                    <div className="dd-text">Drag & Drop</div>
                  </Dropzone>
                  <div>{this.state.notahash}</div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="box">
                <div className="modal">
                  <div>Search for a file</div>
                  <div className="dropzone">
                    <Dropzone onDrop={this.onDropSearch.bind(this)}>
                      <div className="dd-text">Drag & Drop</div>
                    </Dropzone>
                    <div>{this.state.searchhash}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <h2>HOW IT WORKS</h2>
          <div className="row">
            <div className="col-md-4 col-sm-12 col-xs-12">
              <div className="how-icon icon-fingerprint"></div>
              <h3>1. Calculate Unique Fingerprint</h3>
              <div className="text-m">
                <p>Each document has unique fingerprints. One of those fingerprints is the so called SHA-256 Hash. The cool thing about SHA-256 hashes is that they’re easy to calculate, but very hard to forge! </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12">
              <div className="how-icon icon-fingerprint"></div>
              <h3>2.Persist Fingerprint To Blockchain</h3>
              <div className="text-m">
                <p>Once the hash is calculated, Anchor creates a small contract which allows you to add this hash to the Ethereum  blockchain. This contract is then broadcasted, and ready to be mined.</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12">
              <div className="how-icon icon-fingerprint"></div>
              <h3>3. Share Distributed Proof</h3>
              <div className="text-m">
                <p>As soon as the contract is mined into the blockchain, everyone in the network can now verify that as of that block’s time, the document was in existence, signed by you.</p>
              </div>
            </div>                        
          </div>
        </div>

        <div className="container">
          <h2>ABOUT ANKER_</h2>
          <div className="row">
            <div className="col-md-6 col-sm-12 col-xs-12">
              <div className="text-m">
                <p>Witnessing a signature at a certain moment in time by a decentralized network is one of the basic ingredients in almost all blockchain use cases.  </p>
                <p>A notary is a person licensed by the government to perform acts in legal affairs, in particular witnessing signatures on documents (*Wiki).</p>
                <p>The basic principle behind this is that someone else than you can vouch that a certain piece of data existed and signed by you at a certain moment of time. </p>
                <p>Anker simply replaces that person by the Ethereum network. </p>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12">
              <div className="text-m">
                <p>The main difference is that Anker is not a government backed notary, so your government will never recognise it as such. </p>
                <p>Given the fact that the basic principle behind the notary system effectively didn’t change much over the last 400 years, we hope that with this tool, we can convince governments all over the world that notarisation now can be done faster, cheaper and more reliable. </p>
                <p>Anker is an open source project, built by d1gits.</p>
              </div>
            </div>                 
          </div>
        </div>
      </div>
    );
  }
}

export default App;
