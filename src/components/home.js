export default function Home() {
  // This following section will display the table with the records of individuals.
  return (
    <div class="px-4 px-xxl-2 container-xxl">
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
                    https://jsonresume.org
              </li>
              <li class="list-group-item">
                <a target="_blank" rel="noreferrer" class="text-primary" href="https://nextjs.org/learn/foundations/how-nextjs-works/cdns-and-edge">
                 CDNs and the Edge (Next.js)
                </a> <span class="text-body-tertiary"><small><i class="bi bi-box-arrow-up-right"></i></small></span>
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
                    <h5 class="card-header"><i class="bi bi-book text-primary"></i> Word of the day</h5>
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
                    <div class="container me-0 pe-0">
                    <h5 class="card-header border">Past words</h5>
                      <div class="d-flex mb-2">
                        <div class="px-3">
                          <div class="vr text-secondary"></div>
                        </div>
                        <div class="flex-fill">
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
