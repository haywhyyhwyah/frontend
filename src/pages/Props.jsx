import React from 'react'
import Btn from '../components/Btn'
import Card from '../components/Card'

const Props = () => {
    return (
        <>
            <Btn title="Delete" color='btn btn-danger' text="text-light"/>
            <Btn title="Done" color='btn btn-success' text="text-light"/>
            <Btn title="Edit" color='btn btn-info' text="text-light"/>
            <Btn title="Change" color='btn btn-warning' text="text-light"/>


            <Card title="Yessssssssssssss" mainTxt="I am the main card section" color="bg-danger" style="25rem" image="vite.svg"/>
            <Card title="Nooooooooo" mainTxt="I am not the main card " color="bg-danger" style="30rem" image="react.svg"/>
            <Card title="Yessssssssssssss" mainTxt="I am the main card section" color="bg-danger" style="35rem"/>
            <Card title="Yessssssssssssss" mainTxt="I am the main card section" color="bg-danger" style="40rem"/>
            <Card title="Yessssssssssssss" mainTxt="I am the main card section" color="bg-danger" style="45rem"/>
            <Card title="Yessssssssssssss" mainTxt="I am the main card section" color="bg-danger" style="50rem"/>
            <Card title="Yessssssssssssss" mainTxt="I am the main card section" color="bg-danger" style="55rem"/>
        </>
    )
}

export default Props