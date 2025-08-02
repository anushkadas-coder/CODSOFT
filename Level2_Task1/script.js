const jobs = [
  { title: "Frontend Developer", company: "Tech Solutions", location: "Remote" },
  { title: "Backend Developer", company: "Innovate Inc.", location: "Bangalore" },
  { title: "UI/UX Designer", company: "DesignPro", location: "Delhi" }
];

const jobList = document.getElementById("job-list");

jobs.forEach(job => {
  const li = document.createElement("li");
  li.innerHTML = `<strong>${job.title}</strong><br>${job.company} - ${job.location}`;
  jobList.appendChild(li);
});
