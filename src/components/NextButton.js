const NextButton = ({ navigation }) => {
    return (
        <Button
            title="Navigate"
            onPress={() => navigation.navigate('SpecialistPage')}
        />
    );
};