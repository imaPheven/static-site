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
                <a target="_blank" rel="noreferrer" class="text-primary" href="https://project.linuxfoundation.org/hubfs/LF%20Research/Roadmap%20to%20Improve%20Enterprise%20OS%20Dev%20-%20Report.pdf?hsLang=en">
                  Open Source in Enterprises
                </a> <span class="text-body-secondary"><i class="bi bi-filetype-pdf"></i> <small><i class="bi bi-box-arrow-up-right"></i></small></span>
              </li>
              <li class="list-group-item">
                <a target="_blank" rel="noreferrer" class="text-primary" href="https://shuffle.dev/top100-profiles-for-web-devs.pdf">
                 Top devs on Twitter 
                </a> <span class="text-body-secondary"><i class="bi bi-filetype-pdf"></i> <small><i class="bi bi-box-arrow-up-right"></i></small></span>
              </li>
              <li class="list-group-item">
                <a target="_blank" rel="noreferrer" class="text-primary" href="https://nextjs.org/learn/foundations/how-nextjs-works/cdns-and-edge">
                 CDNs and the Edge (Next.js)
                </a> <span class="text-body-secondary"><small><i class="bi bi-box-arrow-up-right"></i></small></span>
              </li>
            </ul>
          </div>
        </div>
        <div class="main">
          <div class="posts-container">
            <div class="mb-4 rounded-3">
              <div class="container-fluid">
                <h1 class="display-5 fw-bold">Under Construction</h1>
                <p class="col-md-8 fs-4">
                  <i class="bi bi-cone-striped text-warning fs-1 text"></i> Please stand
                  by as we work on coming up with content.
                </p>
              </div>
            </div>
            <div class="row align-items-md-stretch">
              <div class="col-md-6">
                <div class="h-100 p-4 text-bg-dark rounded-3">
                  <h2>Word of the day</h2>
                  <p>
                    <div>
                      sentiēns (<i>genitive</i> sentientis);{" "}
                      <i>third-declension one-termination participle</i>
                    </div>
                    <ol></ol>
                    <li>feeling, perceiving with the senses.</li>
                    <li>perceiving: noticing mentally.</li>
                    <li>having an opinion, feeling emotion.</li>
                  </p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="h-100 p-5 bg-light border rounded-3">
                  <h2 class="text-dark">Upcoming topics</h2>
                  <p>
                    AI and ethics
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
