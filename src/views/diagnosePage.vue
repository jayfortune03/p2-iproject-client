<template>
<div id="diagnose-page" class="jumbotron shadow">
    <div class="container">
        <div class="row">
            <div class="col-lg-10 col-xl-9 mx-auto">
            <div class="card flex-row my-5 border-0 rounded-lg shadow">
                <div class="card-body p-4 p-sm-5">
                <h5 class="card-title text-center mb-5 fw-light fs-5">Diagnose</h5>
                <small class="card-title text-center mb-5 fw-light fs-5">You can choose up to 5 Symptoms</small> <br> <br>
                <form>

                    <div class="form-floating mb-1">
                        <label>Symptoms 1</label>
                        <select class="custom-select">
                            <option value="" selected hidden disabled> Select Symptoms 1 </option>
                            <option value="Male"> Male </option>
                        </select>
                    </div>

                    <div class="form-floating mb-1">
                        <label>Symptoms 2</label>
                        <select class="custom-select">
                            <option value="" selected hidden disabled> Select Symptoms 2 </option>
                            <option value="Male"> Male </option>
                        </select>
                    </div>

                    <div class="form-floating mb-1">
                        <label>Symptoms 3</label>
                        <select class="custom-select">
                            <option value="" selected hidden disabled> Select Symptoms 3 </option>
                            <option value="Male"> Male </option>
                        </select>
                    </div>

                    <div class="form-floating mb-1">
                        <label>Symptoms 4</label>
                        <select class="custom-select">
                            <option value="" selected hidden disabled> Select Symptoms 4 </option>
                            <option value="Male"> Male </option>
                        </select>
                    </div>

                    <div class="form-floating mb-1">
                        <label>Symptoms 5</label>
                        <select class="custom-select">
                            <option value="" selected hidden disabled> Select Symptoms 5 </option>
                            <option value="Male"> Male </option>
                        </select>
                    </div>

                    <hr>
                    <br>

                    <center>
                    <div class="d-grid mb-2">
                    <button class="btn btn-lg btn-primary btn-block fw-bold text-uppercase" type="button" data-toggle="modal" data-target="#exampleModalCenter">Submit</button>
                    </div>
                    </center>
                </form>

                <!-- Modal -->
                <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                ...
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.form-control {
    border-radius: 15px;
}

.card-body {
    border-radius: 322px;
}

.custom-select {
    border-radius: 15px;
}

option {
    border-radius: 15px;
}
</style>