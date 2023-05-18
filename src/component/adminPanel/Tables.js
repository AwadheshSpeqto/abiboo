import React from "react";

export default function Tables() {
  return (
    <>
      <div className="container" style={{borderRadius:'20px',border:'25px solid rgb(83, 71, 71)'}}>
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <table className="table text-center">
                <thead>
                  <tr style={{borderTopLeftRadius:'20px'}}>
                    <th scope="col">Streaming Now</th>
                    <th scope="col">Number of Agents</th>
                    <th scope="col">Number of Customers</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>ACE Height</td>
                    <td>4</td>
                    <td>30</td>
                  </tr>
                  <tr>
                    <td>Three Height</td>
                    <td>5</td>
                    <td>34</td>
                  </tr>
                  <tr>
                    <td>ACE Height</td>
                    <td>4</td>
                    <td>30</td>
                  </tr>
                  <tr>
                    <td>Three Height</td>
                    <td>5</td>
                    <td>34</td>
                  </tr>
                  <tr>
                    <td>ACE Height</td>
                    <td>4</td>
                    <td>30</td>
                  </tr>
                  <tr>
                    <td>Three Height</td>
                    <td>5</td>
                    <td>34</td>
                  </tr>
                  <tr>
                    <td>ACE Height</td>
                    <td>4</td>
                    <td>30</td>
                  </tr>
                  <tr>
                    <td>Three Height</td>
                    <td>5</td>
                    <td>34</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
