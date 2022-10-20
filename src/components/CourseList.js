import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"

const CourseList = () => {
  return (
      <div className="container">

        <div className="row">

          <div className="col-lg-4 disease__item">
            <StaticImage
                  src="../../static/img/diseases/pelvis.png"
                  width="48"
                  height="48"
                  aspectRatio={1/1}
                  alt="Musculoskeletal disorders"
                  placeholder="none"
                  objectFit="contain"
                />
            <h2 class="disease__item-title">Musculoskeletal disorders</h2>
            <ul class="disease__item-list">
              <li><span>Sports-related injuries</span></li>
              <li><span>Athletic performance improvement</span></li>
              <li><span>Stem Cell Treatment for Fibromyalgia</span></li>
              <li><span>Chronic Fatigue Syndrome Treatment with Stem Cells</span></li>
              <li><span>Dermatomyositis Treatment with Stem Cells</span></li>
            </ul>
          </div>


          <div className="col-lg-4 disease__item">
          <StaticImage
                  src="../../static/img/diseases/lungs.png"
                  width="48"
                  height="48"
                  aspectRatio={1/1}
                  alt="Respiratory diseases"
                  placeholder="none"
                  objectFit="contain"
                />
            <h2 class="disease__item-title">Respiratory diseases</h2>
            <ul class="disease__item-list">
              <li><span>COPD Treatment with Stem Cells</span></li>
              <li><span>Asthma Treatment with Stem Cells</span></li>
              <li><span>Stem Cell Therapy for Pulmonary Fibrosis</span></li>
              <li><span>Allergic rhinitis</span></li>
            </ul>
          </div>



          <div className="col-lg-4 disease__item">
          <StaticImage
                  src="../../static/img/diseases/kidneys.png"
                  width="48"
                  height="48"
                  aspectRatio={1/1}
                  alt="Endocrine diseases"
                  placeholder="none"
                  objectFit="contain"
                />
            <h2 class="disease__item-title">Endocrine diseases</h2>
            <ul class="disease__item-list">
              <li><span>Stem Cell Therapy for Type 2 Diabetes</span></li>
              <li><span>Hashimoto's thyroiditis</span></li>
              <li><span>Obesity and Weight Loss</span></li>
              <li><span>Hypothyroidism</span></li>
            </ul>
          </div>





          <div className="col-lg-4 disease__item">
          <StaticImage
                  src="../../static/img/diseases/stomach.png"
                  width="48"
                  height="48"
                  aspectRatio={1/1}
                  alt="Digestive System"
                  placeholder="none"
                  objectFit="contain"
                />
            <h2 class="disease__item-title">Digestive System</h2>
            <ul class="disease__item-list">
              <li><span>Stem Cell Therapy for Crohn’s Disease</span></li>
              <li><span>Peptic Ulcer Disease Treatment with Stem Cells</span></li>
              <li><span>Chronic pancreatitis</span></li>
            </ul>
          </div>


          <div className="col-lg-4 disease__item">
          <StaticImage
                  src="../../static/img/diseases/brain.png"
                  width="48"
                  height="48"
                  aspectRatio={1/1}
                  alt="Neurological diseases"
                  placeholder="none"
                  objectFit="contain"
                />
            <h2 class="disease__item-title">Neurological diseases</h2>
            <ul class="disease__item-list">
              <li><span>Autism Treatment with Stem Cells</span></li>
              <li><span>Stem Cell Therapy for Spinal Cord Injuries</span></li>
              <li><Link to="multiple-sclerosis-treatment-with-stem-cells">Multiple Sclerosis Treatment with Stem Cells</Link></li>
              <li><span>Stem Cell Therapy for Cerebral Palsy</span></li>
              <li><span>Alzheimer’s Disease Treatment with Stem Cells Therapy</span></li>
              <li><span>Stem Cell Therapy for Parkinson’s Disease</span></li>
              <li><span>Stem Cell Treatment for Ataxia</span></li>
              <li><span>Stem Cell Therapy for Diffuse Axonal Injury</span></li>
            </ul>
          </div>



          <div className="col-lg-4 disease__item">
          <StaticImage
                  src="../../static/img/diseases/hearth.png"
                  width="48"
                  height="48"
                  aspectRatio={1/1}
                  alt="Cardiovascular diseases"
                  placeholder="none"
                  objectFit="contain"
                />
            <h2 class="disease__item-title">Cardiovascular diseases</h2>
            <ul class="disease__item-list">
              <li><span>Post-Stroke Recovery with Stem Cell Therapy</span></li>
              <li><span>Stem Cell Therapy for Hypertension</span></li>
              <li><span>Cerebral small vessel disease</span></li>
              <li><span>Atherosclerotic vascular disease</span></li>
            </ul>
          </div>

          <div className="col-lg-4 disease__item">
          <StaticImage
                  src="../../static/img/diseases/fracture.png"
                  width="48"
                  height="48"
                  aspectRatio={1/1}
                  alt="Rheumatic diseases"
                  placeholder="none"
                  objectFit="contain"
                />
            <h2 class="disease__item-title">Rheumatic diseases</h2>
            <ul class="disease__item-list">
              <li><span>Stem Cell Therapy for Arthritis</span></li>
              <li><span>Stem Cell Treatment for Systemic Lupus Erythematosus</span></li>
              <li><span>Rheumatoid vasculitis</span></li>
            </ul>
          </div>







        </div>




      </div>
  );
};

export default CourseList;
