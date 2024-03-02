const MyReferralPage2 = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.bigText}>This is the second page of the referral.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "justify-between",
        paddingTop: 20,
    },
});


export default MyReferralPage2;