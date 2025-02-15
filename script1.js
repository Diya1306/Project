// This object holds cities corresponding to each state
const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
    container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
    container.classList.remove("active");
});



// Listen for changes on the state dropdown
document.getElementById('state-select').addEventListener('change', function() {
    var state = this.value;
    var citySelect = document.getElementById('city-select');

    // Clear existing options
    citySelect.innerHTML = '<option value="" disabled selected>City</option>';

    // Define cities for each state
    var cities = {
        
            "Andaman and Nicobar Islands": ["Port Blair"],
            "Andhra Pradesh": ["Adoni", "Amaravati", "Anantapur", "Chandragiri", "Chittoor", "Dowlaiswaram", "Eluru", "Guntur", "Kadapa", "Kakinada", "Kurnool", "Machilipatnam", "Nagarjunakoṇḍa", "Rajahmundry", "Srikakulam", "Tirupati", "Vijayawada", "Visakhapatnam", "Vizianagaram", "Yemmiganur"],
            "Arunachal Pradesh": ["Itanagar"],
            "Assam": ["Bongaigaon", "Dibrugarh", "Dispur", "Guwahati", "Jorhat", "Karimganj", "Nagaon", "Silchar", "Tezpur", "Tinsukia"],
            "Bihar": ["Arrah", "Begusarai", "Bhagalpur", "Bihar Sharif", "Darbhanga", "Gaya", "Katihar", "Muzaffarpur", "Patna", "Purnia"],
            "Chandigarh": ["Chandigarh"],
            "Chhattisgarh": ["Ambikapur", "Bilaspur", "Bhilai", "Durg", "Jagdalpur", "Korba", "Mahasamund", "Raigarh", "Raipur", "Rajnandgaon"],
            "Dadra and Nagar Haveli and Daman and Diu": ["Daman", "Diu", "Silvassa"],
            "Delhi": ["Chanakyapuri", "Dwarka", "Karol Bagh", "Najafgarh", "New Delhi", "Pitampura", "Rohini", "Shahdara", "Vasant Kunj"],
            "Goa": ["Bicholim", "Canacona", "Curchorem", "Margao", "Mapusa", "Panaji", "Ponda", "Quepem", "Sanguem", "Vasco da Gama"],
            "Gujarat": ["Ahmedabad", "Anand", "Bhavnagar", "Gandhinagar", "Jamnagar", "Junagadh","Nadiad", "Navsari", "Rajkot", "Surat", "Vadodara"],
            "Haryana": ["Ambala", "Faridabad", "Gurugram", "Hisar", "Karnal", "Panipat", "Rohtak", "Sonipat", "Yamunanagar"],
            "Himachal Pradesh": ["Bilaspur", "Chamba", "Dharamshala", "Hamirpur", "Kangra", "Kullu", "Manali", "Mandi", "Shimla", "Solan"],
            "Jharkhand": ["Bokaro Steel City", "Deoghar", "Dhanbad", "Giridih", "Gumla", "Hazaribagh", "Jamshedpur", "Phusro", "Ramgarh", "Ranchi"],
            "Karnataka": ["Ballari", "Belagavi", "Bengaluru", "Davangere", "Hubballi-Dharwad", "Kalaburagi", "Mangalore", "Mysuru", "Shivamogga", "Tumakuru"],
            "Kerala": ["Alappuzha", "Kannur", "Kochi", "Kollam", "Kottayam", "Kozhikode", "Malappuram", "Palakkad", "Thiruvananthapuram", "Thrissur"],
            "Ladakh": ["Kargil", "Leh"],
            "Lakshadweep": ["Agatti", "Amini", "Andrott", "Kalpeni", "Kavaratti", "Minicoy"],
            "Madhya Pradesh": ["Bhopal", "Gwalior", "Indore", "Jabalpur", "Murwara", "Ratlam", "Rewa", "Sagar", "Satna", "Ujjain"],
            "Maharashtra": ["Amravati", "Aurangabad", "Kolhapur", "Mumbai", "Nagpur", "Nanded", "Nashik", "Pune", "Sangli", "Solapur"],
            "Manipur": ["Bishnupur", "Churachandpur", "Imphal", "Jiribam", "Kakching", "Moirang", "Senapati", "Tamenglong", "Thoubal", "Ukhrul"],
            "Meghalaya": ["Baghmara", "Jowai", "Khliehriat", "Mairang", "Nongpoh", "Nongstoin", "Resubelpara", "Shillong", "Tura", "Williamnagar"],
            "Mizoram": ["Aizawl", "Biate", "Champhai", "Kolasib", "Lawngtlai", "Lunglei", "Mamit", "N. Kawnpui", "Saiha", "Serchhip"],
            "Nagaland": ["Dimapur", "Kiphire", "Kohima", "Longleng", "Mokokchung", "Mon", "Phek", "Tuensang", "Wokha", "Zunheboto"],
            "Odisha": ["Balasore", "Baripada", "Berhampur", "Bhadrak", "Bhubaneswar", "Cuttack", "Jharsuguda", "Puri", "Rourkela", "Sambalpur"],
            "Puducherry": ["Karaikal", "Mahe", "Puducherry", "Yanam"],
            "Punjab": ["Amritsar", "Bathinda", "Hoshiarpur", "Jalandhar", "Ludhiana", "Moga", "Mohali", "Pathankot", "Patiala"],
            "Rajasthan": ["Ajmer", "Alwar", "Bharatpur", "Bhilwara", "Bikaner", "Jaipur", "Jodhpur", "Kota", "Sikar", "Udaipur"],
            "Sikkim": ["Gangtok", "Gyalshing", "Mangan", "Namchi"],
            "Tamil Nadu": ["Chennai", "Coimbatore", "Dindigul", "Erode", "Madurai", "Salem", "Thoothukudi", "Tiruchirappalli", "Tirunelveli", "Vellore"],
            "Telangana": ["Adilabad", "Hyderabad", "Karimnagar", "Khammam", "Mahbubnagar", "Miryalaguda", "Nizamabad", "Ramagundam", "Siddipet", "Warangal"],
            "Tripura": ["Ambassa", "Belonia", "Bishramganj", "Dharmanagar", "Kailashahar", "Khowai", "Santirbazar", "Teliamura", "Udaipur"],
            "Uttar Pradesh": ["Agra", "Aligarh", "Bareilly", "Ghaziabad", "Kanpur", "Lucknow", "Meerut", "Moradabad", "Varanasi"],
            "Uttarakhand": ["Chamoli", "Dehradun", "Haldwani", "Haridwar", "Kashipur", "Nainital", "Pithoragarh", "Rishikesh", "Roorkee", "Rudrapur"],
            "West Bengal": ["Asansol", "Bardhaman", "Durgapur", "Haldia", "Howrah", "Jalpaiguri", "Kharagpur", "Kolkata", "Malda", "Siliguri"]
        };

    // Get cities for the selected state
    var stateCities = cities[state];

    // Populate city dropdown
    if (stateCities) {
        stateCities.forEach(function(city) {
            var option = document.createElement("option");
            option.value = city;
            option.textContent = city;
            citySelect.appendChild(option);
        });
    }
});
