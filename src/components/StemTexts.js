import React from "react";
import { StaticImage } from "gatsby-plugin-image"

const StemTexts = () => {
  return (
    <section className="blog-details" style={{ paddingTop: 50, background: "#2da397" }}>
      <div className="container">
        <div className="row justify-content-center">


          <div className="col-lg-10">
            <div className="blog-one__single">



              <div className="blog-one__image" style={{ maxHeight: 320, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                <StaticImage
                  src="../../static/img/dna-microscopic-view.jpg"
                  layout="fullWidth"
                  height={320}
                  objectFit="fill"
                  alt="Stem Cell"
                  placeholder="none"
                />
              </div>

              <div className="blog-one__content" style={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>

                <h4>
                  <b>
                    What is Stem Cell?
                  </b>
                </h4>
                <br />
                <h6>Different cells, different tasks</h6>
                <p className="blog-one__text">
                  It's no secret that living things are made up of cells. As individuals working in different departments of a company have different areas of expertise, there are cells specialized for specific tasks in different tissues and organs of the body. 
                  While the lung has lung cells specialized for this organ, the liver has liver cells that are differently specialized. 
                  The brain consists of brain cells(neurons) which allow it to function properly. 
                  Special cells in the eyes called photoreceptors turn the light into electrical signals. 
                  As a result, each cell has become different from each other according to the region in which it is located.
                </p>

                <br />

                <h6>The story begins with two cells</h6>
                <p>
                  Fertilization occurs when the sperm cell from the father and the egg cell from the mother come together. 
                  Now we have fertilized egg cell. After a while, the fertilized egg cell splits into two cells. Then the cells divide into two again. 
                  These divisions continue for several days. After that period, we have a small ball made up of a few dozen embryonic cells. 
                  These cells are called pluripotent(“pluri” = a lot; “potent” = ability). These types of cells have the ability to transform into any type of cell. 
                  In the further stages of fertilization, these cells lose their pluripotency and they transform into different tissue and organ cells. 
                  Scientists were successful in growing the embryonic cells in the laboratory. They named this type of cells as <b>Embryonic Stem Cells</b>. 
                  This work caused many technical and ethical problems because it involved working on human embryos. In 2006, a Japanese team led by Shinya Yamanaka discovered a method to convert mature body cells back into stem cells. 
                  These were termed <b>Induced Pluripotent Stem Cells(iPSCs)</b>.
                </p>

                <br />
                <h4>
                  <b>
                    Types of Stem Cells
                  </b>
                </h4>

                <br />
                <h6>Embryonic Stem Cells(ESC)</h6>
                <p className="blog-one__text">
                  5-7 days after fertilization, cell balls called blastocyst(the early mammalian embryo) are formed. Embryonic Stem Cells are taken from blastocyst. These cells are able to change into more than two hundred different types of cells in our body. Embryonic stem cells studies have been restricted worldwide due to the possibility of their use in human cloning studies.
                </p>
                <br />
                <h6>Adult Stem Cells(ASCs)</h6>
                <p className="blog-one__text">
                  Unlike embryonic stem cells, which can transform into any cell type, adult stem cells(somatic stem cells) can only differentiate into certain cell types.  Adult Stem Cells are found in small numbers in certain tissues in all of us. For example, Hematopoietic stem cells(also called blood stem cell) are one of the Adult Stem Cell types. Hematopoietic Stem Cells can differentiate into all blood cells like Red Blood Cells and White Blood Cells.
                </p>
                <br />
                <h6>Mesenchymal(Stromal) Stem Cells</h6>
                <p className="blog-one__text">
                  Mesenchymal stem cells are adult stem cells that are capable of both renewing themselves and differentiation into about 100 different cells, including muscle, liver, bone, cartilage, pancreas, nerve cells. They can repair other tissues as well as repair their own tissues. The most used stem cell type for clinical applications is now mesenchymal stem cells due to their many advantages.
                </p>
                <br />
                <h6>Induced Pluripotent Stem Cells(IPSC)</h6>
                <p className="blog-one__text">
                  Cells that are not stem cells can be converted to stem cells by reprogramming. Stem cells produced in this way are called Induced Pluripotent Stem Cells. With this method, ethical problems arising from the use of embryonic stem cells are also solved.
                </p>
                <br />
                <h4>
                  <b>
                    What is Stem Cell Therapy?
                  </b>
                </h4>
                <p className="blog-one__text">
                  In stem cell therapy also known as regenerative medicine, stem cells are used to replace or repair damaged cells in a patient. Stem cells are grown by researchers in a lab. These cells are manipulated to transform into the cell type required for the patient, such as blood cell and nerve cell etc. The specialized cells created are transplanted to the patient and recovery is expected in the target organs.
                </p>
                <br />
                <h4>
                  <b>
                    What diseases and conditions can be treated with Stem Cells?
                  </b>
                </h4>
                <p className="blog-one__text">
                  Researchers are constantly trying to discover new treatments using stem cells. The list of diseases that Stem Cell can be used to treat grows wider with each discovery. Currently, only <b>hematopoietic(blood) stem cell transplantation</b> treatment has been approved by the FDA.
                </p>
                <br />
                <p>
                  <b>All Stem cell-based therapies, except FDA-Approved, are experimental!</b>
                </p>

                <p>
                  Long-term clinical trials are needed to make sure these treatments are safe and beneficial. 
                  A treatment can be considered an approved treatment only if its results have been observed for a sufficient time and if it meets the requirements. The safety, effectiveness, and superiority of a proposed treatment must be proven through clinical trials before it can be implemented.
                </p>

                <p>
                  Stem cells are being studied in many clinical trials for different treatments around the world. The website <a href="https://clinicaltrials.gov" target="_blank">clinicaltrials.gov</a> is constantly updated with the latest information on clinical trials testing the safety and effectiveness of stem cell therapies in humans.
                </p>

                <p className="blog-one__text">There are many ongoing and completed clinical trials of stem cell treatments.</p>

                <p className="blog-one__text"><b>Some of these treatments are;</b></p>
                <ul>
                  <li>Spinal Cord Injury</li>
                  <li><a href="https://heallo.co.uk/health-news/stem-cell-therapy-autism/" target="_blank">Autism</a></li>
                  <li>Knee Injuries and Osteoarthritis</li>
                  <li>Oligospermia</li>
                  <li>Parkinson’s disease</li>
                  <li>Infertility</li>
                  <li>Impotence</li>
                  <li>Diabetes</li>
                  <li>Alzheimer's disease</li>
                  <li>COPD disease</li>
                  <li>MS(Multiple Sclerosis)</li>
                  <li>Cerebral Palsy</li>
                  <li>ALS</li>
                  <li>Ulcerative Colitis</li>
                  <li>Heart Diseases</li>
                  <li>Dementia</li>
                  <li>Orthopedic diseases</li>
                  <li>Tooth and gum diseases</li>
                  <li>Autoimmune Diseases</li>
                  <li>Muscular Dystrophy</li>
                  <li>Facial Stem Cell Treatment</li>
                  <li>Myocardial infarction</li>
                  <li>Leukaemia studies</li>
                  <li>Cartilage or tendon injuries</li>
                  <li>Cirrhosis</li>
                  <li>Lupus Erythematosus</li>
                  <li>Rejuvenation with Stem Cells</li>
                  <li>Cerebral Ataxia</li>
                </ul>
              </div>
            </div>

          </div>










        </div>
      </div>
    </section>
  );
};

export default StemTexts;
