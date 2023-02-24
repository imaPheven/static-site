export default function Home() {
  // This following section will display the table with the records of individuals.
  return (
    <div class="px-4 px-xxl-2 container-xxl fs-4">
      <div class="d-lg-grid" id="content">
        <div class="sidecar">
          <div class="masthead py-5">
            <h5>Intersting Links</h5>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <a target="_blank" rel="noreferrer" class="text-primary" href="https://jsonresume.org">
                JSON Resume
                </a>&nbsp;
                <span class="text-body-tertiary">
                  <small>
                    <i class="bi bi-box-arrow-up-right"></i>
                  </small>
                </span>
              </li>
              <li class="list-group-item">
                <a target="_blank" rel="noreferrer" class="text-primary" href="http://www.sevangelatos.com/john-carmack-on/">
                John Carmack on Functional Programming in C++
                </a>&nbsp;
                <span class="text-body-tertiary">
                    <small>
                      <i class="bi bi-box-arrow-up-right"></i>
                    </small>
                </span>
              </li>
              <li class="list-group-item">
                <div>Quick docs on almost any language</div>
                
                <a target="_blank" rel="noreferrer" class="text-primary" href="https://learnxinyminutes.com/">
                learnxinyminutes.com
                </a> <span class="text-body-tertiary">
                    <small>
                      <i class="bi bi-box-arrow-up-right"></i>
                    </small>
                    &nbsp;&nbsp;<a target="_blank" rel="noreferrer" class="text-primary-emphasis" href="https://github.com/adambard/learnxinyminutes-docs">
                  <small><i class="bi bi-github"></i></small>
                </a>
                    </span>
              </li>
              <li class="list-group-item">
                <a target="_blank" rel="noreferrer" class="text-primary" href="https://nextjs.org/learn/foundations/how-nextjs-works/cdns-and-edge">
                 CDNs and the Edge (Next.js)
                </a> <span class="text-body-tertiary"><small> <i class="bi bi-box-arrow-up-right"></i></small></span>
              </li>
              <li class="list-group-item">
                <a target="_blank" rel="noreferrer" class="text-primary" href="https://shuffle.dev/top100-profiles-for-web-devs.pdf">
                 Top devs on Twitter 
                </a> <span class="text-body-tertiary"><i class="bi bi-filetype-pdf"></i> <small><i class="bi bi-box-arrow-up-right"></i></small></span>
              </li>
              <li class="list-group-item">
                <a target="_blank" rel="noreferrer" class="text-primary" href="https://project.linuxfoundation.org/hubfs/LF%20Research/Roadmap%20to%20Improve%20Enterprise%20OS%20Dev%20-%20Report.pdf?hsLang=en">
                  Open Source in Enterprises
                </a> <span class="text-body-tertiary"><i class="bi bi-filetype-pdf"></i> <small><i class="bi bi-box-arrow-up-right"></i></small></span>
              </li>
            </ul>            
          </div>
        </div>
        <div class="main">
          <div class="posts-container">
            
            <div class="row align-items-md-stretch">
              <div class="col-md-12">
                <div class="h-100 p-4 text-bg-dark rounded-3">
                  <div class="card mb-4">
                    <h3 class="card-header"><i class="bi bi-book text-primary"></i> Term of the day</h3>
                    <div class="card-body fs-4">
                      <h4 class="card-title fs-1">Eternal <small class="text-body">(<i class="text-muted">e·ter·nal</i>)</small></h4>
                      <div class="card-text mx-3">
                        <p>
                          {/* <small><i>/əˈtərn(ə)l/</i></small> */}
                          <div><i class="text-muted">adjective</i></div>
                          <ol>
                            <li>without beginning or end</li>
                            <li>existence outside the constraints of time</li>
                          </ol>
                        </p>
                        <h6 class="text-body-emphasis"><i class="bi bi-info-circle-fill text-warning fs-3"></i> Eternal vs everlasting</h6>
                        <p class="fs-6 text-body">
                          While some definitions include <strong>everlasting</strong> and&nbsp;
                          <strong>lasting forever</strong> in the definition, 
                          they are a bit misleading.
                        </p>
                        <p class="fs-6 text-body">
                          Something that is eternal must be <u><strong>both</strong> without beginning 
                          and without end</u>. Something could be everlasting, indicating 
                          without end but still have a beginning and therefore not eternal.
                        </p>
                      </div>
                    </div>
                    <div class="container me-0 pe-0">
                    <h5 class="card-header border">Past terms</h5>
                      <div class="d-flex mb-2">
                        <div class="px-3">
                          <div class="vr text-secondary"></div>
                        </div>
                        <div class="flex-fill">
                          <div class="card rounded-0 border-top-0 ms-1">
                          <div class="card-body">
                              <h5 class="card-title">Design Thinking</h5>
                              <p class="card-text">
                              <figure>
                                <blockquote class="blockquote">
                                  <p class="fs-6"><small><i class="bi bi-quote align-top"></i></small>Design thinking is a non-linear, iterative process that teams use to understand users, challenge assumptions, redefine problems and create innovative solutions to prototype and test."</p>
                                </blockquote>
                                <figcaption class="blockquote-footer">
                                  <cite title="Source Title" class="text-body">What is Design Thinking?</cite> <a class="text-primary" href="https://www.interaction-design.org/literature/topics/design-thinking" target="_blank">interaction-design.org</a> <span class="text-body-tertiary"><small> <i class="bi bi-box-arrow-up-right"></i></small></span>
                                </figcaption>
                              </figure>
                              <h8>5 Phases</h8>
                              <ol>
                                <li>Empathize</li>
                                <li>Define</li>
                                <li>Ideate</li>
                                <li>Prototype</li>
                                <li>Test</li>
                              </ol>
                              </p>
                            </div>
                          </div>
                          <div class="card rounded-0 border-top-0 ms-1">
                          <div class="card-body">
                              <h5 class="card-title">automaton (<i>au·​tom·​a·​ton</i>)</h5>
                              <p class="card-text">
                                <div>
                                  plural: automata (<i>aw·tom·uh·tuh</i>)<br/>
                                  greek αὐτόματος
                                </div>
                                <ol>
                                  <li>a mechanism that is relatively self-operating</li>
                                  <li>
                                    a machine or control mechanism designed to follow automatically 
                                    a predetermined sequence of operations or respond to encoded instructions
                                  </li>
                                  <li>an individual who acts in a mechanical fashion</li>
                                </ol>
                              </p>
                            </div>
                          </div>
                          <div class="card rounded-0 border-top-0 ms-1">
                            <div class="card-body">
                              <h5 class="card-title">sentiēns (<i>genitive</i> sentientis);</h5>
                              <p class="card-text">
                                <ol>
                                  <li>feeling, perceiving with the senses.</li>
                                  <li>perceiving: noticing mentally.</li>
                                  <li>having an opinion, feeling emotion.</li>
                                </ol>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
