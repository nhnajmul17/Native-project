import React from "react";

import { StyleSheet, View } from "react-native";
import { ExpandableListView } from "react-native-expandable-listview";

const content = [
    {
        id: "1",
        categoryName: "1. Duration",
        subCategory: [
            {
                name: "1.1 The duration of the plan is 10 years (2021-2030)",
            },
            {
                id: "1.2",
                name: "1.2 If necessary the duration will be extended",
            },
        ],
    },
    {
        id: "2",
        categoryName: "2. Member",
        subCategory: [
            {
                id: "2.1",
                name: "2.1 The founding 4 members by names 'Martin','Hunter', 'Alex', 'Anderson' is considered as Core members",
            },
            {
                id: "2.2",
                name: "2.2 Adding any new member will require “Yes” votes from all “Core members” from a “Yes” , “No” voting system. Which will exempt rule 3.3.",
            },
            {
                id: "2.3",
                name: "2.3 Any changes in these rules (from 1 to last) will require “Yes” votes from all “Core members” from a “Yes” , “No” voting system. Which will exempt rule 3.3.",
            },
        ],
    },
    {
        id: "3",
        categoryName: "3. Voting System",
        subCategory: [
            {
                id: "3.1",
                name: "3.1 There will be a discussion where everyone will get an opportunity to explain his/her side, view, and analysis",
            },
            {
                id: "3.2",
                name: "3.2 Voting will be in anonymous method",
            },
            {
                id: "3.3",
                name: "3.3 It will be a majority based result. It means the option which gets the majority vote will get selected.",
            },
        ],
    },
    {
        id: "4",
        categoryName: "4. Window",
        subCategory: [
            {
                id: "4.1",
                name: "4.1 ",
            },
            {
                id: "4.2",
                name: "4.2 ",
            },
            {
                id: "4.3",
                name: "4.3 ",
            },
        ],
    },
    {
        id: "5",
        categoryName: "5. Penalty",
        subCategory: [
            {
                id: "5.1",
                name: "5.1 Everyone will get 1 chance in a year to withhold the money. But he/she has to deposit it in the next window.",
            }
        ],
    },
    {
        id: "6",
        categoryName: "6. Loan",
        subCategory: [
            {
                id: "6.1",
                name: "6.1 ",
            },
            {
                id: "6.2",
                name: "6.2 ",
            }
        ],
    }
];

export default function About(props) {
    return (
        <View style={styles.container}>
            <ExpandableListView
                data={content} // required
                itemContainerStyle={styles.listItemContainer}
                innerItemContainerStyle={styles.listInnerItemContainer}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listItemContainer: {
        backgroundColor: "#f4f4f4",
        marginVertical: 2,
        borderRadius: 10,
    },
    listInnerItemContainer: {
        backgroundColor: "#F9F9F9",
        marginLeft: 10,
        marginVertical: 2,
        paddingVertical: 10,
    },
});

