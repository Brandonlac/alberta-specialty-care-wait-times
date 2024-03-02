//RegionPage.js
import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from "react-native";
import Map from "../components/Map";
import DoctorsList from "../components/DoctorsList";
import { Picker } from "@react-native-picker/picker";

// Hard-coded data

const zonesData = [
    {
      name: 'North Zone',
      clinics: [
        { name: 'Cold Lake Healthcare Centre', procedures: ['Procedure2', 'Procedure3', 'Procedure6'], address: '314 25 St, Cold Lake, AB T9M 0E3' },
        { name: 'Hinton Healthcare Centre', procedures: ['Procedure2', 'Procedure3'], address: '1280 Switzer Dr, Hinton, AB T7V 1V2' },
        { name: 'Northern Lights Regional Health Centre (Ft. McMurray)', procedures: ['Procedure2', 'Procedure3'], address: '7 Hospital St, Fort McMurray, AB T9H 1P2' },
        { name: 'Westlock Healthcare Centre', procedures: ['Procedure2', 'Procedure3'], address: '10220 93 St, Westlock, AB T7P 2G4' },
        { name: 'Barrhead Healthcare Centre', procedures: ['Procedure2', 'Procedure3'], address: '4815 51 Ave, Barrhead, AB T7N 1M1' },
        { name: 'Queen Elizabeth II Hospital (Grande Prairie)', procedures: ['Procedure2', 'Procedure3'], address: '10409 98 St, Grande Prairie, AB T8V 2E8' },
      ],
    },
    {
      name: 'Edmonton Zone',
      clinics: [
        { name: 'Fort Saskatchewn Health Centre', procedures: ['Procedure1', 'Procedure2', 'Procedure6'], address: '9401 86 Ave, Fort Saskatchewan, AB T8L 0C6' },
        { name: 'Sturgeon Community Hospital (St. Albert)', procedures: ['Procedure1', 'Procedure2'], address: '201 Boudreau Rd, St. Albert, AB T8N 6C4' },
        { name: 'Leduc Community Hospital', procedures: ['Procedure1', 'Procedure2'], address: '4210 48 St, Leduc, AB T9E 5Z3' },
        { name: 'University of Alberta Hospital (Edmonton)', procedures: ['Procedure1', 'Procedure2'], address: '8440 112 St NW, Edmonton, AB T6G 2B7' },
        { name: 'Royal Alexandra Hospital (Edmonton)', procedures: ['Procedure1', 'Procedure2'], address: '10240 Kingsway NW, Edmonton, AB T5H 3V9' },
        { name: 'Grey Nuns Community Hospital (Edmonton)', procedures: ['Procedure1', 'Procedure2'], address: '1100 Youville Dr W Northwest, Edmonton, AB T6L 5X8' },
      ],
    },
    {
      name: 'Central Zone',
      clinics: [
        { name: 'Red Deer Regional Hospital Centre', procedures: ['Procedure2', 'Procedure3', 'Procedure6'], address: '3942 50a Ave, Red Deer, AB T4N 4E7' },
        { name: 'Olds Hospital and Care Centre', procedures: ['Procedure2', 'Procedure3'], address: '3901 57 Ave, Olds, AB T4H 1T4' },
        { name: "St. Mary's Hospital (Camrose)", procedures: ['Procedure2', 'Procedure3'], address: '4607 53 St, Camrose, AB T4V 1Y5' },
        { name: 'Viking Health Centre', procedures: ['Procedure2', 'Procedure3'], address: '5110 57 Ave, Viking, AB T0B 4N0' },
        { name: 'Vermillon Health Centre', procedures: ['Procedure2', 'Procedure3'], address: '5720 50 Ave, Vermilion, AB T9X 1K7' },
        { name: 'Provost Health Centre', procedures: ['Procedure2', 'Procedure3'], address: '5002 54 Ave, Provost, AB T0B 3S0' },
        { name: 'Drumheller Health Centre', procedures: ['Procedure2', 'Procedure3'], address: '351 9 St NW, Drumheller, AB T0J 0Y1' },
      ],
    },
    {
      name: 'Calgary Zone',
      clinics: [
        { name: 'Mineral Springs Hospital (Banff)', procedures: ['Procedure1', 'Procedure2', 'Procedure6'], address: '305 Lynx St, Banff, AB T1L 1H7' },
        { name: 'Canmore General Hospital', procedures: ['Procedure1', 'Procedure2'], address: '1100 Hospital Pl, Canmore, AB T1W 1N2' },
        { name: 'Peter Lougheed Centre (Calgary)', procedures: ['Procedure1', 'Procedure2'], address: '3500 26 Ave NE, Calgary, AB T1Y 6J4' },
        { name: 'Rockyview General Hospital (Calgary)', procedures: ['Procedure1', 'Procedure2'], address: '7007 14 St SW, Calgary, AB T2V 1P9' },
        { name: 'Foothills Medical Centre (Calgary)', procedures: ['Procedure1', 'Procedure2'], address: '1403 29 St NW, Calgary, AB T2N 2T9' },
      ],
    },
    {
      name: 'South Zone',
      clinics: [
        { name: 'Medicine Hat Regional Hospital', procedures: ['Procedure2', 'Procedure3', 'Procedure6'], address: '666 5 St SW, Medicine Hat, AB T1A 4H6' },
        { name: 'Brooks Health Centre', procedures: ['Procedure2', 'Procedure3'], address: '440 3 St E, Brooks, AB T1R 1B3' },
        { name: 'Chinook Regional Hospital (Lethbridge)', procedures: ['Procedure4'], address: '960 19 St S, Lethbridge, AB T1J 1W5' },
      ],
    },
  ];

const doctorsData = [
    {
        name: 'Mike Wazowski',
        zone: 'North Zone',
        clinics: [
            'Cold Lake Healthcare Centre',
            'Queen Elizabeth II Hospital (Grande Prairie)',
            'Northern Lights Regional Health Centre (Ft. McMurray)'
        ]
    },
    {
        name: 'James Sullivan',
        zone: 'North Zone',
        clinics: [
            'Leduc Community Hospital',
            'Queen Elizabeth II Hospital (Grande Prairie)',
            'Northern Lights Regional Health Centre (Ft. McMurray)',
            'Westlock Healthcare Centre'
        ]
    },
    {
        name: 'George Sanderson',
        zone: 'Edmonton Zone',
        clinics: [
            'Fort Saskatchewn Health Centre',
            'University of Alberta Hospital (Edmonton)',
            'Royal Alexandra Hospital (Edmonton)',
            'Grey Nuns Community Hospital (Edmonton)'
        ]
    },
    {
        name: 'Caroline Forbes',
        zone: 'Edmonton Zone',
        clinics: [
            'Fort Saskatchewn Health Centre',
            'Sturgeon Community Hospital (St. Albert)',
            'Royal Alexandra Hospital (Edmonton)',
            'Grey Nuns Community Hospital (Edmonton)'
        ]
    },
    {
        name: 'Frank Abagnale',
        zone: 'Central Zone',
        clinics: [
            'Red Deer Regional Hospital Centre',
            'Olds Hospital and Care Centre',
            "St. Mary's Hospital (Camrose)",
            'Provost Health Centre'
        ]
    },
    {
        name: 'Carl Hanratty',
        zone: 'Central Zone',
        clinics: [
            'Viking Health Centre',
            'Vermillon Health Centre',
            'Provost Health Centre',
            'Drumheller Health Centre'
        ]
    },
    {
        name: 'Cheryl Ann Garner',
        zone: 'Calgary Zone',
        clinics: [
            'Foothills Medical Centre (Calgary)',
            'Rockyview General Hospital (Calgary)',
            'Peter Lougheed Centre (Calgary)'
        ]
    },
    {
        name: 'Jordan Belfort',
        zone: 'Calgary Zone',
        clinics: [
            'Mineral Springs Hospital (Banff)',
            'Canmore General Hospital',
        ]
    },
    {
        name: 'Mark Hanna',
        zone: 'South Zone',
        clinics: [
            'Chinook Regional Hospital (Lethbridge)'
        ]
    },
    {
        name: 'Cooper Hanley',
        zone: 'South Zone',
        clinics: [
            'Medicine Hat Regional Hospital',
            'Brooks Health Centre'
        ]
    },
];


const RegionPage = ({ navigation, route }) => {
    const [selectedProcedure, setSelectedProcedure] = useState(null);
    const [filteredZones, setFilteredZones] = useState([]);
    const [selectedZone, setSelectedZone] = useState(null);
    const [clinicsData, setClinicsData] = useState([]);
    const [selectedClinic, setSelectedClinic] = useState(null);
    const [showClinics, setShowClinics] = useState(false);
    const [doctorsList, setDoctorsList] = useState([]);

    // Use a dummy procedure for now
    const dummyProcedure = "Procedure2";

    useEffect(() => {
        // Use the route.params to get procedure passed from previous screen
        // Remove dummyProcedure once integrated with previous screen
        const procedure = route.params?.selectedProcedure || dummyProcedure;
    
        if (procedure) {
          setSelectedProcedure(procedure);
          filterZonesByProcedure(procedure);
        }
    }, [route.params?.selectedProcedure]);
    
    const filterZonesByProcedure = (procedure) => {

        // Filter zones based on the selected procedure
        const filtered = zonesData.filter((zone) =>
            zone.clinics.some((clinic) => clinic.procedures.includes(procedure))
        );

        // Set the filtered zones in the state
        setFilteredZones(filtered);

    };

    const filterClinicsByProcedureAndZone = (zone, procedure) => {
        const selectedZoneData = zonesData.find((z) => z.name === zone);
    
        if (selectedZoneData) {
          const filteredClinics = selectedZoneData.clinics.filter((clinic) =>
            clinic.procedures.includes(procedure)
          );
    
          setClinicsData(filteredClinics);
        }
    };

    const handleZoneChange = (zone) => {
        // Reset clinic and doctors list when the zone changes
        setSelectedClinic(null);
        setDoctorsList([]); 

        setSelectedZone(zone);
        // Now, we have the procedure and zone
        filterClinicsByProcedureAndZone(zone, selectedProcedure);
        setShowClinics(true); // Show drop down menu of clinics, remove map
    };

    const handleClinicChange = (clinic) => {
        setSelectedClinic(clinic);
        
        // Filter doctors by zone & clinic
        const filteredDoctors = doctorsData.filter(
            (doctor) =>
              doctor.zone === selectedZone &&
              doctor.clinics.includes(clinic)
        );
      
        setDoctorsList(filteredDoctors);
    };

    const handleDoctorPress = (doctor) => {
        // Navigate to the next page or perform any action on doctor press
        // For example, navigate to a DoctorDetails page
        navigation.navigate('UrgencyPage', { doctor });
    };

    return (
        <View style={styles.container}>
            <View style={styles.zonePicker}>
                <Picker
                selectedValue={selectedZone}
                onValueChange={handleZoneChange}
                >
                    <Picker.Item label="Select Region" value={null} />
                    {filteredZones.map((zone) => (
                        <Picker.Item
                        label={zone.name}
                        value={zone.name}
                        key={zone.name}
                        />
                    ))}
                </Picker>
            </View>
            { showClinics ? (
                <>
                    <View style={styles.clinicPicker}>
                        <Picker
                            selectedValue={selectedClinic}
                            onValueChange={handleClinicChange}
                        >
                            <Picker.Item label="Select Clinic" value={null} />
                            {clinicsData.map((clinic) => (
                            <Picker.Item
                                label={clinic.name}
                                value={clinic.name}
                                key={clinic.name}
                            />
                            ))}
                        </Picker>
                    </View>
                    <View style={styles.clinicAddress}>
                        <>
                        {selectedClinic && (
                            <Text style={{ fontStyle: 'italic', fontSize: 16 }}>
                                {clinicsData.find((clinic) => clinic.name === selectedClinic)?.address}
                            </Text>
                        )}
                        <DoctorsList doctors={doctorsList} onDoctorPress={handleDoctorPress} />
                        </>
                    </View>
                </>
            ) : (
                <View style={styles.mapContainer}>
                <Map />
                </View>
            )}
        </View>
    );
};

// Styles for RegionPage

export default RegionPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "justify-between",
    },
    zonePicker: {
        width: '80%',
        height: 50,
        marginLeft: 20,
        marginTop: 40,
        marginBottom: 10,
        borderWidth: 1,          // Add border width
        borderColor: '#ddd',    // Add border color
    },
    clinicPicker: {
        width: '80%',
        height: 50,
        marginLeft: 20,
        marginTop: 20,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    mapContainer: {
        flex: 1,
        resizeMode: 'contain',
        alignSelf: "center"
    },
    clinicAddress: {
        marginTop: 20,
        marginLeft: 25,
        marginRight: 25,
    }
});
