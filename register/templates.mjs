export function participantTemplate(num) {
    return `<section class="participant${num}">
      <p>Participant 1</p>
      <div class="item">
        <label for="fname"> First Name<span>*</span></label>
        <input id="fname${num}" type="text" name="fname" value="" required />
      </div>
      <div class="item activities">
        <label for="activity">Activity #<span>*</span></label>
        <input id="activity${num}" type="text" name="activity" />
      </div>
      <div class="item">
        <label for="fee">Fee ($)<span>*</span></label>
        <input id="fee${num}" type="number" name="fee" />
      </div>
      <div class="item">
        <label for="date">Desired Date <span>*</span></label>
        <input id="date${num}" type="date" name="date" />
      </div>
      <div class="item">
        <p>Grade</p>
        <select>
          <option selected value="" disabled selected></option>
          <option value="1">1st</option>
          <option value="2">2nd</option>
          <option value="3">3rd</option>
          <option value="4">4th</option>
          <option value="5">5th</option>
          <option value="6">6th</option>
          <option value="7">7th</option>
          <option value="8">8th</option>
          <option value="9">9th</option>
          <option value="10">10th</option>
          <option value="11">11th</option>
          <option value="12">12th</option>
        </select>
      </div>
    </section>`;
}

export const successTemplate = (name, fee, num) => {
    `<p>Thank you ${name} for registering. You have registered ${num} participants and owe $${fee} in Fees.</p>`
}